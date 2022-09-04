import React from 'react';
import DinoItem from './DinoItem';


const RandomDino = ({ randomDino,onRandomDino,onFavoriteSelect,onFavoriteDelete }) => {
    if (randomDino === null) { <p>Loading</p> } else {

        const rDino = randomDino.map((dino, index) => {
            return <DinoItem key={index} dino={dino} onFavoriteSelect={onFavoriteSelect} onFavoriteDelete={onFavoriteDelete} />
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