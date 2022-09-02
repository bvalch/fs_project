import React, { useState, useEffect } from 'react';
import { getDinos } from "../Components/dinoService";



const TopContainer = () => {
    const [dinos, setDinos] = useState([]);


    useEffect(() => {
        getDinos().then((data)=>setDinos(data));
    }, []);






    
    return(
        
        <>
        
        </>
        )


};

export default TopContainer;