import Slider from "react-slick";
import {CursosSection, CursosBox, CarouselItem, CursosTitle, CursosText,CursosSlider, CursosImage, CustomContainer} from './style';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cursos = [
  { title: "Especialista Front-End", image: "/imgcourses/Frontend.jpg" },
  { title: "UI/UX Design", image: "imgcourses/uiux.jpg" },
  { title: "SO Linux", image: "imgcourses/linux.jpg" },
  { title: "Desenvolvedor JavaScript", image: "imgcourses/javascript.jpg" },
  { title: "Desenvolvedor React e Nextjs", image: "imgcourses/uiux.jpg" },
];

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", position: "absolute", top: "50%", left: "-30px", transform: "translateY(-50%)", zIndex: 999, cursor: "pointer" }}
      onClick={onClick}
    >
      <FaArrowLeft size={40} color="black" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", position: "absolute", top: "50%", right: "-30px", transform: "translateY(-50%)", zIndex: 999, cursor: "pointer" }}
      onClick={onClick}
    >
      <FaArrowRight size={40} color="black" />
    </div>
  );
};

const Cursos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <CursosSection>
      <CustomContainer>
        <CursosBox>
          <CursosTitle>Meus Cursos</CursosTitle>
          <CursosText>Esses são os cursos que eu completei e sigo estudando.</CursosText>
          <CursosSlider>
            <Slider {...settings}>
              {cursos.map((cursos, index) => (
                <CarouselItem key={index}>
                  <h5>{cursos.title}</h5>
                  <CursosImage src={cursos.image} alt={cursos.title} />
                </CarouselItem>
              ))}
            </Slider>
          </CursosSlider>
        </CursosBox>
      </CustomContainer>
    </CursosSection>
  );
};

export default Cursos;
