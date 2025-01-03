import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const style = {
    wrapper: {
      padding: "40px 0",
      background: "#fff"
    },
    heading: {
      textAlign: "center",
      padding: "20px",
      marginBottom: "40px"
    },
    slide: {
      margin: "0 20px"
    },
    image: {
      width: "100%",
      maxWidth: "150px",
      height: "auto",
      margin: "0 auto",
      display: "block"
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };

  return (
    <div style={style.wrapper}>
      <div className="container">
        <h2 style={style.heading}>Certificates & Awards</h2>
        <Slider {...settings}>
          <div style={style.slide}>
            <img style={style.image} src="/public/clients.png" alt="Client 1" />
          </div>
          <div style={style.slide}>
            <img style={style.image} src="/public/clients2.png" alt="Client 2" />
          </div>
          <div style={style.slide}>
            <img style={style.image} src="/public/clients3.png" alt="Client 3" />
          </div>
          <div style={style.slide}>
            <img style={style.image} src="/public/clients4.png" alt="Client 4" />
          </div>
          <div style={style.slide}>
            <img style={style.image} src="/public/clients5.png" alt="Client 5" />
          </div>
          <div style={style.slide}>
            <img style={style.image} src="/public/clients6.png" alt="Client 6" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;