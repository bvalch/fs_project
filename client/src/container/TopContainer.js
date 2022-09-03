import React, { useState, useEffect } from 'react';
import { getDinos } from "../Components/dinoService";
import DinoList from '../Components/DinoList';
import NavBar from '../Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomDino from '../Components/RandomDino';
import FindDino from '../Components/FindDino';
import HomePage from '../Components/HomePage';



const TopContainer = () => {
    const [dinos, setDinos] = useState([]);
    const [randomDino, setRandomDino] = useState([]);
    const [filteredDino, setFilteredDino] = useState([])
    const [filterTrigger,setFilterTrigger]=useState()

    useEffect(() => {
        getDinos().then((data) => setDinos(data));
    }, []);

    const reloadData = () => {
        getDinos().then((data) => setDinos(data))
    }

    const onRandomDino = () => {
        const randomIndex = () => { return Math.floor(Math.random() * (dinos.length + 0) + 0) }
        const randint = randomIndex()
        setRandomDino([dinos[randint]])
    }

    const onTypeSelected = (type) => {
        if (type === 'all') { setFilterTrigger(false) } else {
            
            const filteredByType = dinos.filter((dino) => dino.type == type)
            setFilteredDino(filteredByType)
            setFilterTrigger(true) 
        }

    }


    


    return (

        <>
            <NavBar />


            <Routes>
                <Route path="/dinolist" element={<DinoList dinos={dinos} />} />
                <Route path="/randomdino" element={<RandomDino randomDino={randomDino} onRandomDino={onRandomDino} />} />




                {<Route path="/finddino"
                    element={<FindDino onTypeSelected={onTypeSelected}
                        dinos={filterTrigger ? filteredDino : dinos} />}


                />

                }




                <Route path="/" element={<HomePage />} />


            </Routes>
        </>
    )


};

export default TopContainer;