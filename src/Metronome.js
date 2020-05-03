import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./slider.css";

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
   <FirstRow>
    <div>
     <span style={{ fontSize: "24px" }}>{bpm}</span> <span style={{ fontSize: "12px", color: "gray" }}>BPM</span>
    </div>
    <i class={`fa ${play ? "fa-pause" : "fa-play"}`} onClick={() => setPlay(!play)}></i>
   </FirstRow>
   <SecondRow>
    <i class="fa fa-minus" onClick={() => setBpm(bpm - 1)}></i>
    <input type="range" value={bpm} min="40" max="218" onChange={(e) => setBpm(e.target.value)} />
    <i class="fa fa-plus" onClick={() => setBpm(bpm + 1)}></i>
   </SecondRow>
  </Container>
 );
};

const FirstRow = styled.div`
 display: flex;
 align-items: baseline;
 justify-content: space-between;
 margin-bottom: 10px;
`;

const SecondRow = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 i {
  margin: 5px;
 }
`;

const Container = styled.div`
 display: flex;
 flex-direction: column;
 border: 1px solid #dad8d8;
 border-radius: 5px;
 height: 100px;
 width: 300px;
 padding: 10px;
 i {
  color: #2497e3;
 }
`;
