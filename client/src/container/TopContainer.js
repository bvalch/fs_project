import React, { useState, useEffect } from 'react';
import { getDinos } from "../Components/dinoService";
import DinoList from '../Components/DinoList';


const TopContainer = () => {
    const [dinos, setDinos] = useState([])


    useEffect(() => {
        getDinos().then((data)=>setDinos(data));

    }, [])

    
    return(
        
        <>
        <DinoList dinos={dinos}/>
        </>
        )


};

export default TopContainer;