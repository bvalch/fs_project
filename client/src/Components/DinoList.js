import DinoItem from "./DinoItem";

const DinoList = ({dinos}) => {
    
    const dinosList = dinos.map((dino,index) => {
        return (<DinoItem dino={dino} key={index}/>
        )
    });
    // console.log(dinosList)

    return (
        <>
            {dinosList}
        </>
    )
}

export default DinoList;