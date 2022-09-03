import React from 'react';
import DinoItem from './DinoItem';


const RandomDino = ({ randomDino,onRandomDino }) => {
    if (randomDino === null) { <p>Loading</p> } else {

        const rDino = randomDino.map((dino, index) => {
            return <><DinoItem key={index} dino={dino} /></>
        })

        const handleRandomDino = () => { 
            onRandomDino();
            
            
           
           
        }



        return (
            <>
                
                <button onClick={handleRandomDino}>Show me a random Dino!</button>

                {rDino}

               
            </>
        )


    };
}
export default RandomDino;