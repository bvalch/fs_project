import React, { useState, useEffect } from React;


const TopContainer = () => {

    const [dinos, setDinos] = useState([])


    useEffect(() => {
        getDinos();

    }, [])

    const getDinos = async () => {
        const response = await fetch("URL");
        const data = await response.json();
        await setDinos(data)

    }


    return(
        
        <>
        
        </>
        )


};

export default TopContainer;