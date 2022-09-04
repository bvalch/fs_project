import './DinoItem.css';

const DinoItem = ({dino}) => {
    return (
        <div className="card">
            <h1>{dino.name}</h1>
            <img className="dino-image" src={dino.image} alt="There's no images here"></img>
            <p>{dino.type}</p>
            <p>{dino.period}</p>
            </div>
    )
}

export default DinoItem;