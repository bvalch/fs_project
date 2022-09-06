import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuizQuestions from "./QuizQuestions"
import MusicPlayer from './MusicPlayer';


const Quiz = ({ dinos }) => {
    const [score, setScore] = useState(0)
    const [gamesPlayed, setGamesPlayed] = useState(0)

    const navigate = useNavigate ()

    if (dinos.length != 0) {

        const getFourRandomDinosaurs = () => {
            const fourRandomDinos = new Set();
            for (let i = 1; i < 5; i++) {
                fourRandomDinos.add(dinos[Math.floor(Math.random() * (dinos.length))]);
            }
            return [...fourRandomDinos]
        }

        const selectCorrectAnswerIndex = () => {
            let correctAnswerIndex = Math.floor(Math.random() * 4);
            return correctAnswerIndex
        }

        const nextQuiz = () => {
        return (
            <>
            <QuizQuestions testDinos={getFourRandomDinosaurs()} correctAnswerIndex={selectCorrectAnswerIndex()} />
            </>
        )
        }

        return (
        <>
            <QuizQuestions testDinos={getFourRandomDinosaurs()} correctAnswerIndex={selectCorrectAnswerIndex()} />
            <p>
            <button onClick={() => navigate('/kerimquiz')}>Next Quiz!</button>
            
            </p>
            <p>
                {/* <MusicPlayer /> */}
            </p>
            </>

        )
    }
}


export default Quiz;

