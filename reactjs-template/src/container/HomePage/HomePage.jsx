import styled from "styled-components";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import doremon from "../../assets/HomePage/Carousel/doremon.jpg";
import free400 from "../../assets/HomePage/Carousel/free400.jpg";
import sale from "../../assets/HomePage/Carousel/sale.jpg";

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
  .slick-dots {
    bottom: 10px;
  }

  .slick-prev {
    z-index: 10;
    left: 10px;
  }

  .slick-prev::before {
    content: '<';
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
    right: 10px;
  }

  .slick-next::before {
    content: '>';
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
      <div className="container">
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
    </HomePageStyled>
  );
};

export default HomePage;
