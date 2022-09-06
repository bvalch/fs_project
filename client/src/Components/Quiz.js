import React, { useState } from "react";


const Quiz = ({ dinos, randomSeed, quizDinos, trueDino }) => {

    const answrArr = [];
    const [resultArr, setResultArr] = useState([]);
    const [question, setQuestion] = useState([])









    const handleSelectedAnswer = (e) => {
        let answr = e.target.value
        console.log(answr)
        console.log(trueDino.name)
        if (answr === trueDino.name) { setResultArr(['True']) } else { setResultArr(['False']) }
    };

    const handleStartQuiz = async () => {
        const nums = new Set();
        while (nums.size !== 4) {
            nums.add(Math.floor(Math.random() * dinos.length) + 0);
        }
        const seeds = [...nums];
        await randomSeed(seeds);

        const answrOptions = (arg) => {
            const optionArray = []
            quizDinos.forEach((dino,index) => {
                optionArray.push(<p key={index}>{dino[arg]}</p>)
            })
            return optionArray
        }
    
    
        const options = answrOptions('lived_in')
        console.log(options)



        if (trueDino != null) {
            const randomInt = () => { return Math.floor(Math.random() * (3 + 0) + 0) }
            const questionArray = [{ q: `What is the diet of ${trueDino.name}`, a: answrOptions('diet') }, { q: `Where did ${trueDino.name} live in?`, a: answrOptions('lived_in') }, { q: `Who discovered ${trueDino.name}`, a: answrOptions('named_by') }]

            await setQuestion(questionArray[randomInt()])
            // console.log(question)
        }

    };




    // quizDinos.forEach((dino, index) => {
    //     return (answrArr.push(<div key={index}>
    //         <input type="radio" id={index} name="option1" value={dino.name} onClick={handleSelectedAnswer} />
    //         <label htmlFor="option1"> {dino.name}</label>
    //     </div>));
    // });

    // const answrOptions = (arg) => {
    //     const optionArray = []
    //     quizDinos.forEach((dino) => {
    //         optionArray.push(<p>{dino[arg]}</p>)
    //     })
    //     return optionArray
    // }


    // const options = answrOptions('lived_in')
    // console.log(options)






    return (
        <>

            <>
                {trueDino != null ? <div> <h1> {question.q}  </h1> <img className="dino-image" src={trueDino.image} alt="There's no images here"></img> </div> : null}


                {/* {answrArr}
                {answrOptions(['name'])} */}
                {question.a}




                {quizDinos.length === 0 ? <button onClick={handleStartQuiz}>Take the quiz</button> : <button onClick={handleStartQuiz}>Next</button>}



                {resultArr.length === 0 ? <p>{resultArr}</p> : <p>{resultArr}</p>}

            </>

        </>
    )


};
export default Quiz;