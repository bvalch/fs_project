import DinoItem from "./DinoItem";

const DinoList = ({dinos}) => {
    
    const dinosList = dinos.map((dino,index) => {
        return (<div><DinoItem dino={dino} key={index}/></div>
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