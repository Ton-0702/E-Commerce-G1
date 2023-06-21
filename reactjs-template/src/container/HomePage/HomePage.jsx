import styled from "styled-components";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import doremon from "../../assets/HomePage/Carousel/doremon.jpg";
import free400 from "../../assets/HomePage/Carousel/free400.jpg";
import sale from "../../assets/HomePage/Carousel/sale.jpg";
import banner1 from "../../assets/HomePage/Carousel/200d.jpg";
import banner2 from "../../assets/HomePage/Carousel/freeship.png";

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
            <div className="body_category"></div>
          </div>
        </div>
      </CategoryStyled>
    </HomePageStyled>
  );
};

export default HomePage;
