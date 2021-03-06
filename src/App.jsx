import styled from "styled-components";
import Intro from "./Components/Intro";
import Navbar from "./Components/navbar/Navbar";

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
    
`;

const IntroShape = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: polygon(100% 0%, 60% 1%, 99% 99%, 25% 100%);
  background-color: crimson;
`;
function App() {
  return (
    <Container>
      <Navbar/>
      <Intro/>
      <IntroShape/>
    </Container>
  );
}

export default App;
