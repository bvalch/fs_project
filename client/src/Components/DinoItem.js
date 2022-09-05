import './style/DinoItem.css';
import React from 'react'
import { postFavDino,delFavDino } from "./favService"
import { updateDino } from './dinoService';

const DinoItem = ({ dino, onFavoriteSelect,onFavoriteDelete }) => {

    const handleButtonClick = async () => {
        dino.favorite = true
        await updateDino(dino._id, { favorite: true });
        await postFavDino(dino);
        onFavoriteSelect(dino);
    }

    const handleButtonRemove = async () => {
        // updates in main db
        await updateDino(dino._id,{favorite:false});
        // deletes from favs db
        await delFavDino(dino._id)
        onFavoriteDelete(dino._id)
    }

    return (
        <div className="card">
            <h1 data-testid="dinoName">{dino.name}</h1>
            <img className="dino-image" src={dino.image} alt="There's no images here"></img>
            <h3>Type:</h3>
            <p data-testid="dinoType">{dino.type}</p>
            <h3>Diet:</h3>
            <p data-testid="dinoDiet">{dino.diet}</p>
            <h3>Period:</h3>
            <p data-testid="dinoPeriod">{dino.period}</p>
            {dino.favorite ? <button onClick={handleButtonRemove}>Remove from Favourites</button> : <button onClick={handleButtonClick}>Add to favourite</button>}
        </div>

    )
}

export default DinoItem;