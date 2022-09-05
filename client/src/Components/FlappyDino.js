import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const DINO_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 75;

function FlappyDino() {
    const [dinoPosition, setDinoPosition] = useState(200);
    const [gameHasStarted, setGameHasStarted] = useState(false)

    useEffect(() => {
        let timeId;
        console.log(dinoPosition)
        if (gameHasStarted && dinoPosition < GAME_HEIGHT - DINO_SIZE) {
            timeId = setInterval(() => {
                setDinoPosition((dinoPosition) => dinoPosition + GRAVITY);
            }, 24);
        }

        window.addEventListener("keydown", handleKeyDown, false)

        return () => {
            window.removeEventListener("keydown", handleKeyDown, false)
            clearInterval(timeId);
        };
    });

    const handleKeyDown = (event) => {
        if (!gameHasStarted){
            setGameHasStarted(true)
        } else if (event.keyCode == 32){
        let newDinoPosition = dinoPosition - JUMP_HEIGHT;
        if (newDinoPosition < 0){
            setDinoPosition(0)
        }else{
            setDinoPosition(newDinoPosition)
        }
    }
    };


    return (
        <Div >
            <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
                <Dino size={DINO_SIZE} top={dinoPosition} />
            </GameBox>
        </Div>
    );
 }

export default FlappyDino;


    const Dino = styled.div`
  position: relative;
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