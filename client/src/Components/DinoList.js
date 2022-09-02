import DinoItem from "./DinoItem";

const DinoItem = ({dinos}) => {
    
    const dinosList = dinos.map((dino) => {
        return (
            <div>
                <DinoItem dino={dino} key={dino._id}/>
            </div>
        )
    });

    return (
        <>
            {dinosList}
        </>
    )
}

export default DinoItem;