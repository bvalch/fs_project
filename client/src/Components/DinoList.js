import DinoItem from "./DinoItem";
import './DinoList.css';

const DinoList = ({dinos}) => {
    
    const dinosList = dinos.map((dino,index) => {
        return (<DinoItem dino={dino} key={index}/>
        )
    });
    // console.log(dinosList)

    return (

        <div className="list-container">
            <div className="list">
                {dinosList}
            </div>
        </div>
    )
}

export default DinoList;