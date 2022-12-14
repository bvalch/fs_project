import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import background from './style/component_images/flappy-background.png';
import bark from './style/component_images/bark.png';
import scales from './style/component_images/scales.png';

const DINO_SIZE = 20;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 500;
const GRAVITY = 6;
const JUMP_HEIGHT = 75;
const OBSTACLE_WIDTH = 40;
const OBSTACLE_GAP = 200;

function FlappyDino() {
    const [dinoPosition, setDinoPosition] = useState(200);
    const [gameHasStarted, setGameHasStarted] = useState(false);
    const [obstacleHeight, setObstacleHeight] = useState(200);
    const [obstacleLeft, setObstacleLeft] = useState(GAME_WIDTH - OBSTACLE_WIDTH);
    const [score, setScore] = useState(-2);
    
    const bottomObstacleHeight = GAME_HEIGHT - OBSTACLE_GAP - obstacleHeight

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
    }, [dinoPosition, gameHasStarted]);

    useEffect(()=>{
        let obstacleId;
        if (gameHasStarted && obstacleLeft >= -OBSTACLE_WIDTH) {
            obstacleId=setInterval(() => {
                setObstacleLeft((obstacleLeft) => obstacleLeft - 5);
    }, 24);
        return()=> {
            clearInterval(obstacleId);
        };
    }
    else{
        setObstacleLeft(GAME_WIDTH - OBSTACLE_WIDTH);
        setObstacleHeight(Math.floor(Math.random() * (GAME_HEIGHT - OBSTACLE_GAP))
        );
        setScore((score) => score + 1)
    };
}, [gameHasStarted, obstacleLeft]);

    useEffect(() => {
        const hasCollidedWithTopObstacle =
            dinoPosition >= 0 && dinoPosition < obstacleHeight;
        const hasCollidedWithBottomObstacle =
            dinoPosition <= 500 && dinoPosition >= 500 - bottomObstacleHeight;

        if (obstacleLeft <= 0 && 
            obstacleLeft <= OBSTACLE_WIDTH && 
            (hasCollidedWithTopObstacle || hasCollidedWithBottomObstacle)
            ) {
            setGameHasStarted(false)
            setScore(-2)
        }
    }, [dinoPosition, obstacleHeight, bottomObstacleHeight, obstacleLeft]);


    const handleKeyDown = (event) => {
        if (!gameHasStarted) {
            setGameHasStarted(true)
        } else if (event.keyCode == 32) {
            let newDinoPosition = dinoPosition - JUMP_HEIGHT;
            if (newDinoPosition < 70) {
                setDinoPosition(70)
            } else {
                setDinoPosition(newDinoPosition)
            }
        }
    };


    return (
        
        <Div >
        
            <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>
            
                <Obstacle
                    top={0}
                    width={OBSTACLE_WIDTH}
                    height={obstacleHeight}
                    left={obstacleLeft}
                />
                 <Obstacle
                    top={GAME_HEIGHT - (obstacleHeight + bottomObstacleHeight)}
                    width={OBSTACLE_WIDTH}
                    height={bottomObstacleHeight}
                    left={obstacleLeft}
                />
                <Dino size={DINO_SIZE} top={dinoPosition} />
                
            </GameBox>
            <Span>Score : {score}</Span>
            
        </Div>
        
    );
}

export default FlappyDino;


const Dino = styled.div`
  position: absolute;
  background-image:  url(${scales});
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  top: ${(props) => props.top}px;
  border-radius: 50%;
  `;

const Div = styled.div`
  display: flex;
  width:100%;
  justify-content: center;
  & span{
    font-size: 44px;
    color: white;
    margin-top: 10%;
  }
  `;


const Span = styled.span`
  font-size: 24px;
  font-family: 'ZCOOL KuaiLe', cursive;
  
  margin-left: 0.5em;
  height: 50px;
  
 `;


const GameBox = styled.div`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-image:  url(${background});
  overflow: hidden;
  border: 8px solid darkgreen;
  `;

const Obstacle = styled.div`
  position: relative;
  top: ${(props) => props.top}px;
  background-image:  url(${bark});
  width:${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  `;