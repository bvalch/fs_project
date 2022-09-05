import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DINO_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 50;

function FlappyDino() {
    const [dinoPosition, setDinoPosition] = useState(250);

    useEffect(() => {
        let timeId;
        if (dinoPosition < GAME_HEIGHT - DINO_SIZE) {
            timeId = setInterval(() => {
                setDinoPosition((dinoPosition) => dinoPosition + GRAVITY);
            }, 24);
        }

        return () => {
            clearInterval(timeId);
        };
    });

    const handleClick = () => {
        let newDinoPosition = dinoPosition - JUMP_HEIGHT;
        setDinoPosition(newDinoPosition)
    };


    return (
        <Div onClick={handleClick}>
            <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
                <Dino size={DINO_SIZE} top={dinoPosition} />
            </GameBox>
        </Div>
    );
 }

export default FlappyDino;


    const Dino = styled.div`
  position: absolute;
  background-color: red;
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%`;

    const Div = styled.div`
  display: flex;
  width:100%;
  justify-content: center`;

    const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: blue`;