import React from 'react';
import DinoDetail from './DinoDetail';


const RandomDino = ({ randomDino,onRandomDino,onFavoriteSelect,onFavoriteDelete }) => {
    if (randomDino === null)  { <p>Loading</p> } else {
        

        const rDino = randomDino.map((dino, index) => {
            return <DinoDetail key={index} dino={dino} onFavoriteSelect={onFavoriteSelect} onFavoriteDelete={onFavoriteDelete} />
        })

        const handleRandomDino = () => { 
            onRandomDino();
        }



        return (
            <div>
                
                <button onClick={handleRandomDino}>Show me a random Dino!</button>
                <div>
                {rDino}
                </div>
               
            </div>
        )


    };
}
export default RandomDino;