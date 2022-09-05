import React from 'react'
import './style/DinoDetail.css';
import { postFavDino, delFavDino } from "./favService"
import { updateDino } from './dinoService';

const DinoDetail = ({ dino, onFavoriteSelect, onFavoriteDelete }) => {

    const handleButtonClick = async () => {
        dino.favorite = true
        await updateDino(dino._id, { favorite: true });
        await postFavDino(dino);
        onFavoriteSelect(dino);
    }

    const handleButtonRemove = async () => {
        // updates in main db
        await updateDino(dino._id, { favorite: false });
        // deletes from favs db
        await delFavDino(dino._id)
        onFavoriteDelete(dino._id)
    }

    return (
        <div className='detail-full'>
            <div className='detail-container'>
                <div className="detail-card">
                    <h1 data-testid="dinoName" className='dino-detail-title'>{dino.name}</h1>
                    <div className='detail-inner'>
                        <img className="dino-detail-image" src={dino.image} alt="There's no images here"></img>
                        <div className='detail-text'>
                            <p>{dino.name} had a {dino.diet} diet and was a {dino.species} species of Dinosaur.</p>
                            <p>It lived during the {dino.period} and inhabited {dino.lived_in}.</p>
                            <p>{dino.name} was a {dino.type} type of Dinosaur and was {dino.length} long.</p>
                        </div>
                    </div>
                    {dino.favorite ? <button onClick={handleButtonRemove} className='button-a'>Remove from Favourites</button> : <button onClick={handleButtonClick} className='button-a'>Add to favourite</button>}
                </div>
            </div>
        </div>

    )
}

export default DinoDetail;