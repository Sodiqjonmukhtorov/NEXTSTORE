import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerLogo from "../assets/BannerLogo.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#000", 
        borderRadius: "50%",
        width: "30px", 
        height: "30px", 
        textAlign: "center",
        lineHeight: "30px", 
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* Tugmani chizish */}
      <div style={{ color: "#fff" }}>Next</div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        backgroundColor: "#000", 
        borderRadius: "50%",
        width: "30px",
        height: "30px", 
        textAlign: "center",
        lineHeight: "30px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {/* Tugmani chizish */}
      <div style={{ color: "#fff" }}>Prev</div>
    </div>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    auto: true,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="container pt-[25px] rounded-[20px]">
      <Slider {...settings}>
        <img className="rounded-[10px]" src={BannerLogo} alt="" />
        <img className="rounded-[10px]" src={BannerLogo} alt="" />
        <img className="rounded-[10px]" src={BannerLogo} alt="" />
      </Slider>
    </div>
  );
}
