import React from "react";
import styled from "styled-components";
import { Metronome } from "./Metronome";

function App() {
 return (
  <Container>
   <Metronome />
  </Container>
 );
}

const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
`;

export default App;
