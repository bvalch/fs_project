const DinoItem = ({dino}) => {
    return (
        <div>
            <h1>{dino.name}</h1>
            <p>{dino.type}</p>
        </div>
    )
}

export default DinoItem;