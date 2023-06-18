import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterListStyled = styled.div``;

const FooterList = ({ list_footer_item, title, img, fontawesome }) => {
  img.forEach((element) => {
    console.log(element);
  });
  if (img) {
    return (
      <FooterListStyled list_footer={list_footer_item} title={title}>
        <h2>chăm sóc khách hàng</h2>
        <ul>
          {img &&
            img.map((element, index) => (
              <li key={index}>
                <Link>
                  <img src={element} alt="" />
                </Link>
              </li>
            ))}
        </ul>
      </FooterListStyled>
    );
  }
};

export { FooterList };
