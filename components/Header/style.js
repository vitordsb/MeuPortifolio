import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 5rem;
    transition: .3s;
    :hover {
    transform: scale(1.11);
    }
  }

  @media (max-width: 760px) {
    width: 90%;
  }

  @media (max-width: 600px) {

    img {
      width: 4rem;
    }
  }
`
export const Image = styled.img`

`

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;


export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 250px;
  @media (max-width: 560px) {
    flex-direction: column;
    background-color: #e6e6e6;
    position: fixed;
    height: 100%;
    z-index: 100;

    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;

    a {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Icons = styled.div`
  gap: 35px;
  display: flex;
  margin-right: 6%;
  :hover {
      transform: scale(1.11);
    }
  img {
    width: 35px;
    transition: .3s;
  }
`

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;
