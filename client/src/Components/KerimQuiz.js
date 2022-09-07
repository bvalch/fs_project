import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizQuestions from "./QuizQuestions"
import MusicPlayer from './MusicPlayer';
import './style/KerimQuiz.css';


const Quiz = ({ dinos }) => {
    
   

    const navigate = useNavigate();

    if (dinos.length !== 0) {

        const getFourRandomDinosaurs = () => {
            const fourRandomDinos = new Set();
            for (let i = 1; i < 5; i++) {
                fourRandomDinos.add(dinos[Math.floor(Math.random() * (dinos.length))]);
            }
            return [...fourRandomDinos]
        };

        const selectCorrectAnswerIndex = () => {
            let correctAnswerIndex = Math.floor(Math.random() * 4);
            return correctAnswerIndex
        };


        return (
            <>
                <QuizQuestions testDinos={getFourRandomDinosaurs()} correctAnswerIndex={selectCorrectAnswerIndex()} />
                <p>
                    <button onClick={() => navigate('/kerimquiz')}>Next Quiz!</button>

                </p>
                <p>
                    <MusicPlayer />
                </p>
            </>

        )
    }
};


export default Quiz;


