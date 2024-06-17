import React from 'react';
import "../styles/courses.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import especialstafe from '../assets/img/imgcourses/Certificado Desenvolvedor Especialista Front-end.jpg';
import pythoncurso from '../assets/img/imgcourses/Certificado Python avançado.jpg';
import linux from '../assets/img/imgcourses/Certificado Linux - Fundamentos para desenvolvedores.jpg';
import pythonOutro from '../assets/img/imgcourses/Certificado Python.jpg';
import uiuxdesign from '../assets/img/imgcourses/Certificado UX_UI design.jpg';
import scrach from '../assets/img/imgcourses/Curso Scratch Alura.jpg';
import javascript from '../assets/img/imgcourses/Certificado Desenvolvedor JavaScript Front-end.jpg';

export const Courses = () => {

  const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3    
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
      <section className="course">
        <div className="container-course">
          <div className="row-couse">
            <div className="col-12-course" id="certificates">
              <div className="course-skill-bx wow zoomIn-course">
                  <h2>Certificados conquistados</h2>
                    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme course-slider">

                        <div className="item-course">
                          <h3>Curso Front-end</h3>
                          <p>Curso feito na plataforma Treina Web</p>
                            <img src={especialstafe} className='image-course'/> 
                        </div>

                        <div className="item-course">
                          <h3>Curso Python</h3>
                          <p>Curso feito na plataforma Udemy Academy</p>
                            <img src={pythoncurso} className='image-course'/> 
                        </div>

                        <div className="item-course">
                          <h3>Curso Python</h3>
                          <p>Curso feito na faculdade Rio Branco</p>
                            <img src={pythonOutro} className='image-course'/> 
                        </div>

                        <div className="item-course">
                          <h3>Curso JavaScript</h3>
                          <p>Curso feito na plataforma Treina Web</p>
                            <img src={javascript} className='image-course'/> 
                        </div>

                        <div className="item-course">
                          <h3>Curso Scrach</h3>
                          <p>Curso feito na plataforma Alura</p>
                            <img src={scrach} className='image-course'/> 
                        </div>

                        <div className="item-course">
                          <h3>Curso Linux</h3>
                          <p>Curso feito na plataforma Treina Web</p>
                            <img src={linux} className='image-course'/> 
                        </div>

                        <div className="item-course">
                          <h3>Curso UI/UX</h3>
                          <p>Curso feito na plataforma Treina Web</p>
                            <img src={uiuxdesign} className='image-course'/> 
                        </div>       
                      </Carousel>
                    </div> 
                  </div>
                </div>
              </div>
          </section>
  )
}