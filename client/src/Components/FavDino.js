import React from "react";
import DinoItem from "./DinoItem";


const FavDino=({favDino,onFavoriteDelete})=>{

if(favDino===null || favDino.length===0){return (<p>Nothing here</p>)}else{

   const favDinoNodes=favDino.map((dino,index)=>{
        return (<DinoItem dino={dino} key={index} onFavoriteDelete={onFavoriteDelete} />
        )
    
    })





    return(
        <>
        {favDinoNodes}
        </>
        )



}

}

export default FavDino;