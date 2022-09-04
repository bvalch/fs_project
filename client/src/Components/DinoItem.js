import './DinoItem.css';

const DinoItem = ({dino}) => {
    return (
        <div className="card">
            <h1>{dino.name}</h1>
            <img className="dino-image" src={dino.image} alt="There's no images here"></img>
            <h3>Type:</h3>
            <p>{dino.type}</p>
            <h3>Diet:</h3>
            <p>{dino.diet}</p>
            <h3>Period:</h3>
            <p>{dino.period}</p>
            </div>
    )
}

export default DinoItem;