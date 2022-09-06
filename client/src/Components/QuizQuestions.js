

const QuizQuestions = ({ testDinos, correctAnswerIndex }) => {

    const dietAnswers = ["Omnivorous", "Carnivorous", "Herbivorous"];
    const eraAnswers = ["Triassic", "Jurassic", "Cretaceous"]

    const checkAnswer = (answer) => {
        let testthing = Object.values(testDinos[correctAnswerIndex])
        testthing.map((entry, index) => {
            if (entry.includes(answer)) { 
                
                // insert correct answer animations here

                return console.log("correct!") }
        })
    }

    if (testDinos.length != 0) {

        return (
            <>
                {<img className="dino-image" src={testDinos[correctAnswerIndex].image} alt="There's no images here"></img>}
                <h2>What's the dinosaurs name?  </h2>
                {testDinos.map((dino, index) => {
                    return (
                        <button onClick={() => checkAnswer(dino.name)} value={dino.name} key={index}>{dino.name}</button>
                    )
                })}
                <h2>Was it...?</h2>
                {dietAnswers.map((dietAnswer, index) => {
                    return (
                        <button onClick={() => checkAnswer(dietAnswer)} value={dietAnswer} key={index}>{dietAnswer}</button>
                    )
                })}
                <h2>Which era was it from..?</h2>
                {eraAnswers.map((era, index) => {
                    return (
                        <button onClick={() => checkAnswer(era)} value={era} key={index}>{era}</button>
                    )
                })}
            </>
        )
    }
    else {
        return (<p>404</p>)
    }
}

export default QuizQuestions

