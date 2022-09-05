import React, { useState } from "react";
import DinoList from "./DinoList";

const Quiz = ({ dinos, randomSeed, quizDinos, trueDino }) => {
    const answrArr = []
    const [resultArr, setResultArr] = useState([])



    // let resultArr = ['nay']

    const handleSelectedAnswer = (e) => {
        let answr = e.target.value
        console.log(answr)
        console.log(trueDino.name)

        if (answr === trueDino.name) { setResultArr(['moose']) } else { setResultArr(['goose']) }


    }

    // useState(()=>{
    //     handleSelectedAnswer();

    //     },[])




    const handleStartQuiz = () => {
        const nums = new Set();
        while (nums.size != 4) {
            nums.add(Math.floor(Math.random() * dinos.length) + 0)
        }
        const seeds = [...nums]
        randomSeed(seeds)
    }

    quizDinos.forEach((dino, index) => {
        return (answrArr.push(<div key={index}>
            <input type="radio" id={index} name="option1" value={dino.name} onSelect={handleStartQuiz} onClick={handleSelectedAnswer} />
            <label htmlFor="option1"> {dino.name}</label>
        </div>))
    })







    return (
        <>

            <>
                {trueDino != null ? <div><h1>What is the name of this dino :  </h1> <img className="dino-image" src={trueDino.image} alt="There's no images here"></img></div> : null}

                {answrArr}


                {quizDinos.length === 0 ? <button onClick={handleStartQuiz}>Take the quiz</button> : <button onClick={handleStartQuiz}>Next</button>}



                {resultArr.length === 0 ? <p>{resultArr}</p> : <p>{resultArr}</p>}
            </>

        </>
    )


};
export default Quiz;