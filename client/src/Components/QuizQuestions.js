
import { useState } from 'react';
import ButtonSound from "./ButtonSound";


const QuizQuestions = ({ testDinos, correctAnswerIndex }) => {

    const [score, setScore] = useState(0);
    const [result,setResult]=useState([])

    const dietAnswers = ["Omnivorous", "Carnivorous", "Herbivorous"];
    const eraAnswers = ["Triassic", "Jurassic", "Cretaceous"];

    const checkAnswer = (answer) => {
        let testthing = Object.values(testDinos[correctAnswerIndex])
        let correct = false;

        testthing.forEach((entry) => {
            if (entry.toLowerCase().includes(answer.toLowerCase())) {
                correct = true;
            };
        })

        if (correct) {
            setScore(score+1);
            setResult('Correct');
            ButtonSound();
        } else {
            setResult('Wrong')
        }
    };


    const handleAnswerClick=(e)=>{

        checkAnswer(e.target.value)
    }



    if (testDinos.length !== 0) {

        return (
            <div className='quiz-container'>
                {<img className="dino-image-quiz" src={testDinos[correctAnswerIndex].image} alt="There's no images here"></img>} 
                <br></br>
                <div className='score'>Your score: {score}</div>
                <br></br>
                <div className='answer'>You are... {result}</div>
                



                <h2 className="quiz-text"> What's the dinosaurs name?  </h2>
                {testDinos.map((dino, index) => {
                    return (
                        <button className="quiz-button" type='radio' onClick={handleAnswerClick} value={dino.name} key={index}>  {dino.name} </button>
                    )
                })};


                <h2 className="quiz-text"> Was it...? </h2>

                {dietAnswers.map((dietAnswer, index) => {
                    return (
                        <button className="quiz-button" onClick={handleAnswerClick} value={dietAnswer} key={index}>{dietAnswer}</button>
                    )
                })};


                <h2 className="quiz-text"> Which era was it from..? </h2>

                {eraAnswers.map((era, index) => {
                    return (
                        <button className="quiz-button" onClick={handleAnswerClick} value={era} key={index}>{era}</button>
                    )
                })};
                </div>
            

        )
    } 
    else {
        return (<p>404</p>)
    }
}

export default QuizQuestions;

