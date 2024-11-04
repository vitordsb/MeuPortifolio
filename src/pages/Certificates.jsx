import Slider from 'react-slick';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const certificates = [
  { title: "Especialista Front-End", image: "/src/assets/imgcourses/Frontend.jpg", link: "https://www.treinaweb.com.br/certificado/NMLWNURYAUJ1" },
  { title: "Web Services, API's e SOAP", image: "/src/assets/imgcourses/API.jpeg", link: "https://www.linkedin.com/learning/certificates/c4c34b153930d341f1aeba83dd4e591221e2f8493d023f3dd410c256cb510815?trk=share_certificate"},
  { title: "UI/UX Design", image: "/src/assets/imgcourses/uiux.jpg", link: "https://www.treinaweb.com.br/certificado/MVXVV3N287LA" },
  { title: "Programador Python", image: "/src/assets/imgcourses/python.jpg", link: "https://www.udemy.com/certificate/UC-1b1b6a02-225d-4cca-a480-618899f94773/" },
  { title: "Curso de Git e Github", image: "/src/assets/imgcourses/GIT.jpeg", link: "https://www.linkedin.com/learning/certificates/5d10641555247b1326529f31edc5a4d87e9533dcb6ceb080d3fd520043de1802?trk=share_certificate" },
  { title: "Desenvolvedor React", image: "/src/assets/imgcourses/react.png", link: "https://www.treinaweb.com.br/certificado/RGCLBHSCWKXF" },
  { title: "Curso de QA Software", image: "/src/assets/imgcourses/QA.jpeg", link: "https://www.linkedin.com/learning/certificates/a0bc64a07fc39146b57beacb4bcadf3be3cbcf499c585f0473bc897c451efe73?trk=share_certificate" },
  { title: "SO Linux", image: "/src/assets/imgcourses/linux.jpg", link: "https://www.treinaweb.com.br/certificado/PH7ULH2ZUDGN" },
  { title: "Desenvolvedor JavaScript", image: "/src/assets/imgcourses/javascript.jpg", link: "https://www.treinaweb.com.br/certificado/MX4DQNNQBEFL" },
  { title: "Desenvolvedor React e Nextjs", image: "/src/assets/imgcourses/react.png", link: "https://www.treinaweb.com.br/certificado/CZFNEUZT2LMC" },
];

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", position: "absolute", top: "50%", left: "-30px", transform: "translateY(-50%)", zIndex: 999, cursor: "pointer" }}
      onClick={onClick}
    >
      <FaArrowLeft size={40} color="${({ theme }) => theme.text}" />
    </div>
  );
};
PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none", position: "absolute", top: "50%", right: "-30px", transform: "translateY(-50%)", zIndex: 999, cursor: "pointer" }}
      onClick={onClick}
    >
      <FaArrowRight size={40} color="${({ theme }) => theme.text}" />
    </div>
  );
};
NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};




export default function Cursos () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
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
    <>
    <CursosSection>
        <CursosBox>
          <CursosTitle>Certificados</CursosTitle>
          <CursosText>Certificados de cursos feitos em plataformas de estudo e treinamento.</CursosText>
          <CursosSlider>
            <Slider {...settings}>
              {certificates.map((certificates, index) => (
                <CarouselItem key={index}>
                  <h5>{certificates.title}</h5>
                    <CursosImage src={certificates.image} alt={certificates.title} />
                    <Button size="small" target='blank' href={certificates.link} variant="contained">Ver certificado</Button>
                </CarouselItem>
              ))}
            </Slider>
          </CursosSlider>
        </CursosBox>
    </CursosSection>
    </>
  );
};
export const CursosSection = styled.section`
  padding: 30px 0;
  width: auto;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: relative;
  @media (max-width: 680px) {
    width: auto;
  }
  @media (min-width: 1280px) {
    width: auto;
  }
  @media (max-width: 1920px) {
    width: auto;
  }
`;

export const CursosBox = styled.div``;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h5 {
    margin-bottom: 20px;
    font-size: 25px;
  }
`;

export const CursosTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 55px;
  text-align: center;
  font-weight: bolder;
  @media (max-width: 760px) {
    font-size: 40px;
  }
`;

export const CursosText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  letter-spacing: 0.8px;
  text-align: center;
  line-height: 1.5em;
  margin: 20px 0 75px 0;
  @media (max-width: 760px) {
    font-size: 18px;
  }
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: bolder;
    span {
      color: #4789fb;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const CursosSlider = styled.div`
  width: 1700px;
  margin: auto;
  position: relative;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-list {
    overflow: hidden;
  }

  .slick-track {
    display: flex;
  }
  @media (max-width: 760px) {
    width: 300px;
  }
  @media (max-width: 1280px) {
    padding: 0;
    margin-top: -20px;
  }
`;

export const CursosImage = styled.img`
  height: 340px;
  margin-bottom: 20px;
  transition: calc(0.3s);
  &:hover {
    transform: scale(1.025);
  }
  @media (max-width: 760px) {
    height: 120px;
  }
  @media (max-width: 1280px) {
    height: 180px;
  }
`;
