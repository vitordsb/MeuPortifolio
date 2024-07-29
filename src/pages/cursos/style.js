import styled from 'styled-components';

export const CursosSection = styled.section`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: relative;
  @media (max-width: 760px) { 
    padding: 0;
  }
`;

export const CursosBox = styled.div`

  @media (max-width: 760px) { 
    padding: 50px;
  }
`;

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
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 20px;
  @media (max-width: 760px) { 
    margin-top: -30px;
  }
`;

export const CursosText = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px 0 75px 0;

  @media (max-width: 760px) {
    text-align: justify;
    width: 300px;
    margin-top: -20px;
  }
`;

export const CursosSlider = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
    margin-top: -80px;

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
    padding: 0;
    margin-top: -60px;
  }
`;

export const CursosImage = styled.img`
  height: 350px;
  @media (max-width: 760px) {
    height: 150px;
  }
`;

export const CustomContainer = styled.div`
  max-width: 1140px;
  .react-slick-list {
    padding-bottom: 20px;
  }

  .react-slick-item {
    display: flex;
    justify-content: center;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h5 {
    margin-top: 10px;
  }
`;

export default CursosSection;