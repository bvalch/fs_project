
import { useState } from 'react';
import ButtonSound from "./ButtonSound";


const QuizQuestions = ({ testDinos, correctAnswerIndex }) => {

    const [score, setScore] = useState(5);
    const [answer,setAnswer]=useState([])

    const dietAnswers = ["Omnivorous", "Carnivorous", "Herbivorous"];
    const eraAnswers = ["Triassic", "Jurassic", "Cretaceous"];

    const checkAnswer = (answer) => {
        let testthing = Object.values(testDinos[correctAnswerIndex])
        testthing.map((entry, index) => {
            if (entry.toLowerCase().includes(answer.toLowerCase())) {

                setScore(score+1)

                 console.log("correct!")
                setAnswer('Correct')
                return ButtonSound()


            }else{setAnswer('Wrong')}
        })
    };


    const handleAnswerClick=(e)=>{
        e.currentTarget.disabled = true
        checkAnswer(e.target.value)
    }



    if (testDinos.length != 0) {

        return (
            <div className='quiz-container'>
                {<img className="dino-image" src={testDinos[correctAnswerIndex].image} alt="There's no images here"></img>} 
                <br></br>
                {score}
                <br></br>
                {answer}
                



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

