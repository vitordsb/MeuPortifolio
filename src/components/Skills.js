/* eslint-disable jsx-a11y/img-redundant-alt */
import javascript from "../assets/img/svg/javascript-js.svg";
import typescript from "../assets/img/svg/icons8-typescript.svg";
import react from "../assets/img/svg/react-svgrepo-com.svg";
import node from "../assets/img/svg/icons8-node-js.svg";
import php from "../assets/img/svg/file-type-php.svg";
import "../styles/skills.css"
import Carousel from 'react-multi-carousel';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                      <h2>Habilidades e Estudos</h2>
                        <p>Essas são minhas principais habilidades com base em meus estudos e práticas com projetos próprios. Uma parte ainda continua em desenvolvimento e estudo, em breve haverão grandes lançamentos.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">  
                                <img src={javascript} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={typescript} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>Php</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
