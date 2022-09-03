const DinoItem = ({dino}) => {
    return (
        <div>
            <h1>{dino.name}</h1>
            <p>{dino.type}</p>
            <img className="dino-image" src={dino.image} alt="There's no images here"></img>
        </div>
    )
}

export default DinoItem;