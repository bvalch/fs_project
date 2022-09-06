import React from "react";
import DinoDetail from "./DinoDetail";


const FavDino=({favDino,onFavoriteDelete})=>{

if(favDino===null || favDino.length===0){return (<p>Nothing here</p>)}else{

   const favDinoNodes=favDino.map((dino,index)=>{
        return (<DinoDetail dino={dino} key={index} onFavoriteDelete={onFavoriteDelete} />
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