import styled from "styled-components";
import { FooterList } from "./FooterList";
import Visa from "../../assets/Footer/visa.png";
import MasterCard from "../../assets/Footer/MasterCard.png";
import jcb from "../../assets/Footer/jcb.png";
import american_express from "../../assets/Footer/american_express.png";
import cod from "../../assets/Footer/cod.png";
import tragop0 from "../../assets/Footer/o%.png";
import pay from "../../assets/Footer/vnpay.png";
import spaylater from "../../assets/Footer/spaylater.png";
import qr_download from "../../assets/Footer/qr_download.png";
import apple_download from "../../assets/Footer/apple_download.png";
import google_play_download from "../../assets/Footer/google_play_download.png";
import app_gallery_download from "../../assets/Footer/app_gallery_download.png";
import { NavLink } from "react-router-dom";

const FooterStyled = styled.div`
  background-color: #fbfbfb;
  font-size: 0.875rem;
  text-size-adjust: none;
  -webkit-text-size-adjust: none;

  .body_footer {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }

  .footer_footer {
    justify-content: space-between;
    color: rgba(0, 0, 0, 0.54);
    padding: 2.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
  }

  .footer_footer .NationRegion {
    display: flex;
  }

  .footer_footer .NationRegion ul {
    display: flex;
  }

  .footer_footer .NationRegion ul li{
    list-style-type: none;
    padding: 0 5px;
  }

  .footer_footer .NationRegion ul li:not(:last-child){
    border-right: 1px solid rgba(0,0,0,.2);
  }

  .footer_footer .NationRegion ul li a{
    text-decoration: none;
    color: rgba(0,0,0,.54);
  }
`;

const arrayFooterList = [
  {
    title: "Chăm sóc khách hàng",
    children: [
      {
        titleItem: "Trung Tâm Trợ Giúp",
      },
      {
        titleItem: "Shopee Blog",
      },
      {
        titleItem: "Shopee Mail",
      },
      {
        titleItem: "Hướng Dẫn Mua Hàng",
      },
      {
        titleItem: "Hướng Dẫn Bán Hàng",
      },
      {
        titleItem: "Thanh Toán",
      },
      {
        titleItem: "Shopee Xu",
      },
      {
        titleItem: "Vận Chuyển",
      },
      {
        titleItem: "Trả Hàng & Hoàn Tiền",
      },
      {
        titleItem: "Chăm Sóc Khách Hàng",
      },
      {
        titleItem: "Chính Sách Bảo Hành",
      },
    ],
  },
  {
    title: "Về Shopee",
    children: [
      {
        titleItem: "Giới Thiệu Về Shopee Việt Nam",
      },
      {
        titleItem: "Tuyển Dụng",
      },
      {
        titleItem: "Điều Khoản Shopee",
      },
      {
        titleItem: "Chính Sách Bảo Mật",
      },
      {
        titleItem: "Chính Hãng",
      },
      {
        titleItem: "Kênh Người Bán",
      },
      {
        titleItem: "Flash Sales",
      },
      {
        titleItem: "Chương Trình Tiếp Thị Liên Kết Shopee",
      },
      {
        titleItem: "Liên Hệ Với Truyền Thông",
      },
    ],
  },
  {
    title: "THANH TOÁN",
    children: [
      {
        img: Visa,
      },
      {
        img: MasterCard,
      },
      {
        img: jcb,
      },
      {
        img: american_express,
      },
      {
        img: cod,
      },
      {
        img: tragop0,
      },
      {
        img: pay,
      },
      {
        img: spaylater,
      },
    ],
  },
  {
    title: "THEO DÕI CHÚNG TÔI TRÊN",
    children: [
      {
        fontawesome: "fa-brands fa-facebook",
        titleItem: "Facebook",
      },
      {
        fontawesome: "fa-brands fa-instagram",
        titleItem: "Instagram",
      },
      {
        fontawesome: "fa-brands fa-linkedin",
        titleItem: "Linkedin",
      },
    ],
  },
  {
    title: "TẢI ỨNG DỤNG SHOPEE NGAY THÔI",
    children: [
      {
        img_download: qr_download,
      },
      {
        img_download: apple_download,
      },
      {
        img_download: google_play_download,
      },
      {
        img_download: app_gallery_download,
      },
    ],
  },
];

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="body_footer">
          <FooterList valueArray={arrayFooterList}></FooterList>
        </div>
        <div className="footer_footer">
          <p>© 2023 Shopee. Tất cả các quyền được bảo lưu.</p>
          <div className="NationRegion">
            <p>Quốc gia & Khu vực:</p>
            <ul>
              <li>
                <NavLink>Singapore</NavLink>
              </li>
              <li>
                <NavLink>Indonesia</NavLink>
              </li>
              <li>
                <NavLink>Đài Loan</NavLink>
              </li>
              <li>
                <NavLink>Thái Lan</NavLink>
              </li>
              <li>
                <NavLink>Malaysia</NavLink>
              </li>
              <li>
                <NavLink>Việt Nam</NavLink>
              </li>
              <li>
                <NavLink>Philippines</NavLink>
              </li>
              <li>
                <NavLink>Brazil</NavLink>
              </li>
              <li>
                <NavLink>México</NavLink>
              </li>
              <li>
                <NavLink>Columbia</NavLink>
              </li>
              <li>
                <NavLink>Chile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};

export { Footer };
