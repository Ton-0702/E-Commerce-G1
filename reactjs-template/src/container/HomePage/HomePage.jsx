import styled from "styled-components";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import doremon from "../../assets/HomePage/Carousel/doremon.jpg";
import free400 from "../../assets/HomePage/Carousel/free400.jpg";
import sale from "../../assets/HomePage/Carousel/sale.jpg";
import banner1 from "../../assets/HomePage/Carousel/200d.jpg";
import banner2 from "../../assets/HomePage/Carousel/freeship.png";
import linhkienmoi from "../../assets/HomePage/Category/linhkienmoi.webp";
import linhkiencu from "../../assets/HomePage/Category/linhkiencu.webp";
import tannhiet from "../../assets/HomePage/Category/tannhiet.webp";
import laptop from "../../assets/HomePage/Category/laptop.webp";
import pc from "../../assets/HomePage/Category/PC.webp";
import vga from "../../assets/HomePage/Category/VGA.webp";
import screen from "../../assets/HomePage/Category/screen.webp";
import phukien from "../../assets/HomePage/Category/phukien.webp";
import funitureGaming from "../../assets/HomePage/Category/futureGaming.webp";
import phimchuottainghe from "../../assets/HomePage/Category/phimchuottainghe.webp";
import thietbimang from "../../assets/HomePage/Category/thietbimang.webp";
import thietbiamthanh from "../../assets/HomePage/Category/thietbiamthanh.webp";
import camera from "../../assets/HomePage/Category/camera.webp";
import thietbivanphong from "../../assets/HomePage/Category/thietbivanphong.webp";
import { HomePageCate } from "./HomePageCate";

const dataSlider = [
  {
    img: doremon,
  },
  {
    img: free400,
  },
  {
    img: sale,
  },
];

const dataCate = [
  {
    img: linhkienmoi,
    title: "Linh Kiện Mới",
  },
  {
    img: linhkiencu,
    title: "Linh Kiện Cũ",
  },
  {
    img: tannhiet,
    title: "Tản Nhiệt PC",
  },
  {
    img: laptop,
    title: "Laptop Chính Hãng",
  },
  {
    img: pc,
    title: "PC",
  },
  {
    img: vga,
    title: "Card Màn Hình",
  },
  {
    img: screen,
    title: "Màn Hình Máy Tính",
  },
  {
    img: phukien,
    title: "Phụ Kiện",
  },
  {
    img: funitureGaming,
    title: "Bàn, Ghế Gaming",
  },
  {
    img: phimchuottainghe,
    title: "Phím, Chuột, Tai Nghe",
  },
  {
    img: thietbimang,
    title: "Thiết Bị Mạng",
  },
  {
    img: thietbiamthanh,
    title: "Thiết Bị Âm Thanh",
  },
  {
    img: camera,
    title: "Camera, Thiết Bị Quan Sát",
  },
  {
    img: thietbivanphong,
    title: "Thiết Bị Văn Phòng",
  },
];

const HomePageStyled = styled.div`
  background-color: #f5f5f5;
`;

const BannerStyled = styled.div`
  background-color: #fff;

  .container {
    padding: 30px 0;
  }

  .banner {
    display: grid;
    grid-template-columns: 33% 33% 33%;
    column-gap: 10px;
  }

  .banner .card_banner:first-child {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .banner .card_banner img {
    width: 100%;
    object-fit: cover;
  }

  .slick-dots {
    bottom: 10px;
  }

  .slick-prev {
    z-index: 10;
    left: 10px;
  }

  .slick-prev::before {
    content: "<";
    width: 2.1875rem;
    height: 3.75rem;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.18);
    border-radius: 5px;
    color: white;
    font-family: unset;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-next {
    z-index: 10;
    right: 25px;
  }

  .slick-next::before {
    content: ">";
    width: 2.1875rem;
    height: 3.75rem;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.18);
    border-radius: 5px;
    color: white;
    font-family: unset;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CategoryStyled = styled.div`
  padding-top: 1.25rem;

  .category {
    background-color: #fff;
  }

  .category .header_category{
    display: flex;
    align-items: center;
    background: #fff;
    height: 3.75rem;
    border-bottom: 1px solid rgba(0,0,0,.05);
    padding: 0 1.25rem;
    text-transform: uppercase;
  }

  .category .header_category h2{
    font-size: 1rem;
    color: rgba(0,0,0,.54);
    font-weight: 500;
  }

  .category .body_category{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
  }
`;

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <HomePageStyled>
      <BannerStyled>
        <div className="container">
          <div className="banner">
            <div className="card_banner">
              <Slider {...settings}>
                {dataSlider
                  ? dataSlider.map((e, index) => (
                      <div key={index}>
                        <img src={e.img} alt="" />
                      </div>
                    ))
                  : null}
              </Slider>
            </div>
            <div className="card_banner">
              <img src={banner1} alt="" />
            </div>
            <div className="card_banner">
              <img src={banner2} alt="" />
            </div>
          </div>
        </div>
      </BannerStyled>
      <CategoryStyled>
        <div className="container">
          <div className="category">
            <div className="header_category">
              <h2>danh mục</h2>
            </div>
            <div className="body_category">
              <HomePageCate data={dataCate}></HomePageCate>
            </div>
          </div>
        </div>
      </CategoryStyled>
    </HomePageStyled>
  );
};

export default HomePage;
