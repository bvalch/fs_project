import ButtonSound from "./ButtonSound";

const QuizQuestions = ({ testDinos, correctAnswerIndex }) => {

    const dietAnswers = ["omnivorous", "carnivorous", "herbivorous"];
    const eraAnswers = ["Triassic", "Jurassic", "Cretaceous"]

    const checkAnswer = (answer) => {
        let testthing = Object.values(testDinos[correctAnswerIndex])
        testthing.map((entry) => {
            if (entry.includes(answer)) { 
                
                // insert correct answer animations here

                return ButtonSound()
            }
        })
    }

    if (testDinos.length != 0) {

        return (
            <div className='quiz-container'>
                {<img className="dino-image-quiz" src={testDinos[correctAnswerIndex].image} alt="There's no images here"></img>}
                <h2 className="quiz-text">What's the dinosaurs name?  </h2>
                {testDinos.map((dino, index) => {
                    return (

                        <button  className="quiz-button"  onClick={() => checkAnswer(dino.name)} value={dino.name} key={index}>{dino.name}</button>

                    )
                })}
                <h2 className="quiz-text">Was it...?</h2>
                {dietAnswers.map((dietAnswer, index) => {
                    return (
                        <button className="quiz-button" onClick={() => checkAnswer(dietAnswer)} value={dietAnswer} key={index}>{dietAnswer}</button>
                    )
                })}
                <h2 className="quiz-text">Which era was it from..?</h2>
                {eraAnswers.map((era, index) => {
                    return (
                        <button className="quiz-button" onClick={() => checkAnswer(era)} value={era} key={index}>{era}</button>
                    )
                })}
            </div>
        )
    } 
    else {
        return (<p>404</p>)
    }
}

export default QuizQuestions

