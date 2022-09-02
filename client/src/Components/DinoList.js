import DinoItem from "./DinoItem";

const DinoList = ({dinos}) => {
    
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

export default DinoList;