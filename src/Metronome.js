import React, { useState, useEffect } from "react";
import styled from "styled-components";
import './slider.css';

const audio = new Audio("beat.wav");

export const Metronome = () => {
 const [bpm, setBpm] = useState(100);
 const [play, setPlay] = useState(false);

 useEffect(() => {
  let interval = setInterval(() => {
   if (play) audio.play();
  }, 1000 / (bpm / 60));
  return () => {
   clearInterval(interval);
  };
 }, [bpm, play]);

 return (
  <Container>
   <div>{bpm} BPM</div>
   <button onClick={() => setPlay(!play)}>{play ? "Stop" : "Play"}</button>
   <input type="range" value={bpm} min="40" max="218" onChange={(e) => setBpm(e.target.value)} />
  </Container>
 );
};

const Container = styled.div`
 display: flex;
 align-items: center;
 border: 1px solid #dad8d8;
 border-radius: 5px;
 height: 100px;
 width: 300px;
`;
