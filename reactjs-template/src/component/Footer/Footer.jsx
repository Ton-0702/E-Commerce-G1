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

const FooterStyled = styled.div`
  .footer-1 {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
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
];

const Footer = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="footer-1">
          <FooterList valueArray={arrayFooterList}></FooterList>
        </div>
      </div>
    </FooterStyled>
  );
};

export { Footer };
