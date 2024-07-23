import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);

`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  line-height: 1.1;

  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Brilho = styled.text`
  color: #4789FB;
  text-shadow: 1px 1px 1px #4789FB;
`

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;

  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 70px;
  font-weight: bolder;

  @media (max-width: 760px) {
    font-size: 45px;
  }
`;

export const Function = styled.span`
  color: black;
  font-size: 55px;
  margin-bottom: 10px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 35px;
    text-align: center;
  }
`;

export const Intro = styled.span`
  color: black;
  font-size: 20px;
  text-align: justify;
  width: 490px;

  @media (max-width: 760px) {
    font-size: 15px;
    width: 330px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  background-color: #4789FB;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;

  svg {
    font-size: 20px;
  }
  @media (max-width: 760px) {
    margin-left: 80px;
  }
`;

export const Logo = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 28rem;
    height: 28rem;
  }

  @media (max-width: 760px) {
    width: 100%;
  }

  @media (max-width: 600px) {

    img {
      width: 15rem;
      height: 15rem;
    }
  }
`;


export const Img = styled.img`
  border-radius: 50%;
`