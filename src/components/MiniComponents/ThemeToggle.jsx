import { FaMoon, FaSun } from "react-icons/fa6";
import { useThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.color};
  background: none;
  margin-top: 5px;
  border: none;
  cursor: pointer;
  font-size: 38px;
  transition: calc(0.3s);
  &:hover {
    color: ${(props) => props.theme.color};
    transform: scale(1.1);
  }
  @media (max-width: 560px) {
    font-size: 28px;
    margin-left: 15px;
    margin-top: 4px;
  }
`;

const ThemeToggle  = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Button onClick={toggleTheme}>
      {useThemeContext().isDarkMode ? <FaSun /> : <FaMoon />}
    </Button>
  );
};

export default ThemeToggle;
