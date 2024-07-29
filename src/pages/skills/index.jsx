import Slider from "react-slick";
import {SkillSection, SkillBox, CarouselItem, SkillTitle, SkillText, SkillSlider, SkillImage, CustomContainer} from './style';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const skills = [
  { title: "JavaScript", image: "/svg/javascript.svg" },
  { title: "TypeScript", image: "/svg/typescript.svg" },
  { title: "Node", image: "/svg/node.svg" },
  { title: "React", image: "/svg/react.svg" },
  { title: "PHP", image: "/svg/php.svg" },
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

const Skills = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <SkillSection>
      <CustomContainer>
        <SkillBox>
          <SkillTitle>Mnhas Habilidades</SkillTitle>
          <SkillText>Essas são as tecnologias as quais eu tenho competências e sigo estudando.</SkillText>
          <SkillSlider>
            <Slider {...settings}>
              {skills.map((skill, index) => (
                <CarouselItem key={index}>
                  <SkillImage src={skill.image} alt={skill.title} />
                  <h5>{skill.title}</h5>
                </CarouselItem>
              ))}
            </Slider>
          </SkillSlider>
        </SkillBox>
      </CustomContainer>
    </SkillSection>
  );
};

export default Skills;