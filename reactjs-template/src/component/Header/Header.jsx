import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DefaultButton } from "../Button";

const HeaderStyled = styled.div`
  background: linear-gradient(-180deg, #1d71ab, #189eff);
  padding: 10px;
  .navigation-bar {
    display: flex;
    justify-content: space-between;
  }

  .navigation-bar .navigation-bar-left ul {
    display: flex;
    gap: 20px;
  }

  .navigation-bar .navigation-bar-left ul li {
    list-style-type: none;
    position: relative;
  }

  .navigation-bar .navigation-bar-left ul li::after {
    content: "";
    height: 0.9375rem;
    width: 0;
    border-left: 1px solid hsla(0, 0%, 100%, 0.22);
    border-right: 1px solid hsla(0, 0%, 100%, 0.22);
    position: absolute;
    left: -10px;
    top: calc(50% - 7px);
  }

  .navigation-bar .navigation-bar-left ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 0.8125rem;
    font-weight: 300;
    padding: 0.25rem;
    position: relative;
    overflow: visible;
    outline: 0;
  }

  .navigation-bar .navigation-bar-left ul li a:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }

  .navigation-bar .navigation-bar-right ul {
    display: flex;
    gap: 10px;
  }

  .navigation-bar .navigation-bar-right ul li {
    list-style-type: none;
  }

  .navigation-bar .navigation-bar-right ul li a {
    text-decoration: none;
    color: #fff;
  }

  .navigation-bar .navigation-bar-right ul li span {
    font-size: 0.8125rem;
    font-weight: 300;
    padding: 0.25rem;
    position: relative;
    overflow: visible;
    outline: 0;
  }

  .navigation-bar .navigation-bar-right ul li a:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }

  .body_header{
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 .625rem;
    align-items: center;
  }

  .body_header img {
    width: 11.875rem;
    height: 5rem;
    margin-right: 60px;
  }

  .body_header .form_search{
    width: 80%;
  }

  .body_header .form_search form{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body_header .form_search form input{
    padding: 12px;
    width: 100%;
  }

  .body_header .form_search form .btn button{
    position: absolute;
    top: 5px;
    right: 5px;
    outline: none;
    border: none;
    border-radius: 2px;
  }

  

  .body_header .form_search form .btn button:hover{
    opacity: 0.9;
  }

  .body_header .cart{
    padding: 10px 10px;
    margin: 0px 60px;
  }

  .body_header .cart i{
    color: #fff;
    font-size: 20px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="header">
          <div className="navigation-bar">
            <div className="navigation-bar-left">
              <ul>
                <li>
                  <NavLink>Kênh Người Bán</NavLink>
                </li>
                <li>
                  <NavLink>Trở thành Người bán Shopee</NavLink>
                </li>
                <li>
                  <NavLink>Tải ứng dụng</NavLink>
                </li>
              </ul>
            </div>
            <div className="navigation-bar-right">
              <ul>
                <li>
                  <NavLink>
                    <i class="fa-regular fa-bell"></i>
                    <span>Thông Báo</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <i class="fa-regular fa-circle-question"></i>
                    <span>Hỗ Trợ</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <span>Đăng Ký</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <span>Đăng Nhập</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="body_header">
          <img src="https://static.ladipage.net/593a9c9b2c5a1c99580faaf2/shopee-logo-min-20191119043505.png" alt="" />
          <div className="form_search">
            <form action="#">
              <input type="search" name="search" id="search" placeholder="Bạn cần tìm gì" />
              {/* <button><i class="fa-solid fa-magnifying-glass"></i></button> */}
              <DefaultButton fontawesome={"fa-solid fa-magnifying-glass"} padding={"10px 25px"} bgColor={"#189eff"} textColor={"#fff"}></DefaultButton>
            </form>
          </div>
          <div className="cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i></div>
        </div>
      </div>
    </HeaderStyled>
  );
};

export { Header };
