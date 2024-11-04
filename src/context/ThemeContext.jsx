import { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import PropTypes from "prop-types";
// Cria o contexto de tema
const ThemeContext = createContext();

// Temas
const lightTheme = {
  background: "#D9D9D9",
  color: "#000000",
};

const darkTheme = {
  background: "#191527",
  color: "#ffffff",
};


// Componente do provedor de tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <StyledComponentsThemeProvider
        theme={isDarkMode ? darkTheme : lightTheme}
      >
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Hook para usar o contexto
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext deve ser usado dentro de um ThemeProvider"
    );
  }
  return context;
};
