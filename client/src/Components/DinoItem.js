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

            <h1 data-testid="dinoName" className='dino-title'>{dino.name}</h1>
            <img className="dino-image" src={dino.image} alt="There's no images here"></img>
            <h3 className='dino-title'>Type:</h3>
            <p>{dino.type}</p>
            <h3 className='dino-title'>Diet:</h3>
            <p>{dino.diet}</p>
            <h3 className='dino-title'>Period:</h3>

            <p data-testid="dinoPeriod">{dino.period}</p>
            {dino.favorite ? <button onClick={handleButtonRemove} className='button-b'>Remove from Favourites</button> : <button onClick={handleButtonClick} className='button-b'>Add to favourite</button>}
        </div>

    )
}

export default DinoItem;