import styled from "styled-components";

const HomePageCateStyled = styled.div`
    .category_item img{
    object-fit: contain;
    flex-shrink: 1;
    width: 70%;
    height: 70%;
    margin-top: 10%;
    }
`;

const HomePageCate = ({ data }) => {
  return (
    <HomePageCateStyled>
      {data && data.map((element, index) => {
        return (
          <HomePageCateStyled key={index}>
            <div className="category_item">
              <img src={element.img} alt="" />
              <span>{element.title}</span>
            </div>
          </HomePageCateStyled>
        );
      })}
    </HomePageCateStyled>
  );
};

export { HomePageCate };
