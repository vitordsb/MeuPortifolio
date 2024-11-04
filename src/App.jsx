import GlobalStyle from "./GlobalStyle";
import { Router, Route } from "wouter";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import Skills from "./pages/Skills";
import Certificates from "./pages/Certificates.jsx";
import Projects from "./pages/Projects.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import {motion, AnimatePresence} from "framer-motion"
import styled from "styled-components";

const Screen = styled(motion.div)``


export default function App() {
  const variants = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.25 } },
    exit: { opacity: 0, x: 200, transition: { duration: 0.5 } },
  };
  return (
    <>
      <AnimatePresence>
      <ThemeProvider>
        <GlobalStyle />
          <Header />
          <Router>
            <Screen initial="hidden" animate="visible" exit="exit" variants={variants}> 
              <Route path="/">
                  <Home />
              </Route>
            </Screen>

            <Screen initial="hidden" animate="visible" exit="exit" variants={variants}>
              <Route path="/skills">
                  <Skills />
              </Route>
            </Screen>
        
            <Screen initial="hidden" animate="visible" exit="exit" variants={variants}>
              <Route path="/certificates">
                  <Certificates />
              </Route>
            </Screen>

            <Screen initial="hidden" animate="visible" exit="exit" variants={variants}>
              <Route path="/projects">
                  <Projects />
              </Route>
            </Screen>
        </Router>
        </ThemeProvider>
        </AnimatePresence>
    </>
  );
}
