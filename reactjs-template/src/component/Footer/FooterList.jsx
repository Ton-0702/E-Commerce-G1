import styled from "styled-components";
import { NavLink } from "react-router-dom";

const FooterListStyled = styled.div`
  width: 15.625rem;
  padding: 0.3125rem;
  box-sizing: border-box;

  h2 {
    font-size: 0.75rem;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.87);
    margin-bottom: 1.25rem;
    margin-top: 2.5rem;
    text-transform: uppercase;
  }

  a:hover {
    color: rgb(24, 158, 255);
  }
`;

const FooterListOnlyImg = styled.div`
  ul {
    display: grid;
    grid-template-columns: auto auto auto;
    /* flex-wrap: wrap; */
    list-style-type: none;
    padding: 0;
    margin: 0 0 1rem;
  }

  li {
    width: 3.75rem;
    height: 1.875rem;
    margin-bottom: 0.5rem;
    margin-right: 0.5rem;
    padding: 0.25rem;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 0.125rem;
  }
`;

const FooterListImgDownload = styled.div`
  .listImgDownload:nth-child(-n + 2) div{
    float: left;
  }

  .listImgDownload:nth-child(1) a {
    text-decoration: none;
  }

  .listImgDownload:first-child a img {
    width: 5rem;
    margin-right: 0.75rem;
    padding: 0.25rem;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  .listImgDownload:nth-child(n + 2) a {
    width: 4.25rem;
    height: 1rem;
    margin-bottom: 0.5rem;
    padding: 0.25rem;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }

  .listImgDownload:nth-child(n + 2) a img {
    max-height: 100%;
    max-width: 100%;
  }
`;

const FooterListNotImg = styled.div`
  ul {
    text-decoration: none;
    display: block;
    color: rgba(0, 0, 0, 0.65);
    list-style-type: none;
    margin: 0 0 1rem;
    padding: 0;
  }

  li {
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.65);
    overflow: hidden;
  }

  i {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
`;

const FooterList = ({ valueArray }) => {
  const results = valueArray?.map((element) => {
    const listItemsOnlyImg = element.children
      .filter((child) => child.img)
      .map((child, index) => (
        <li key={index}>
          <NavLink>
            <img src={child.img} alt="" />
          </NavLink>
        </li>
      ));

    const listItemsImgDownload = element.children
      .filter((child) => child.img_download)
      .map((child, index) => (
        <div key={index}>
          <NavLink>
            <img src={child.img_download} alt="" />
          </NavLink>
        </div>
      ));

    const listItemsNotImg = element.children
      .filter((child) => child.titleItem)
      ?.map(
        (child, index) => (
          console.log(child.fontawesome, child.titleItem),
          (
            <li key={index}>
              <NavLink>
                {child.fontawesome ? (
                  <i className={child.fontawesome}></i>
                ) : null}
                <span>{child.titleItem}</span>
              </NavLink>
            </li>
          )
        )
      );

    return [
      <FooterListStyled title={element.title}>
        <h2>{element.title}</h2>
        {listItemsOnlyImg && (
          <FooterListOnlyImg>
            <ul>{listItemsOnlyImg}</ul>
          </FooterListOnlyImg>
        )}
        {listItemsNotImg && (
          <FooterListNotImg>
            <ul>{listItemsNotImg}</ul>
          </FooterListNotImg>
        )}
        {listItemsImgDownload && (
          <FooterListImgDownload>
            <div className="listImgDownload">{listItemsImgDownload}</div>
          </FooterListImgDownload>
        )}
      </FooterListStyled>,
    ];
  });

  return results;
};

export { FooterList };
