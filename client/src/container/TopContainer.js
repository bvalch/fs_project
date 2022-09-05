import React, { useState, useEffect } from 'react';
import { getDinos } from "../Components/dinoService";
import { getFavDinos } from '../Components/favService';
import DinoList from '../Components/DinoList';
import NavBar from '../Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomDino from '../Components/RandomDino';
import FindDino from '../Components/FindDino';
import HomePage from '../Components/HomePage';
import FavDino from '../Components/FavDino';
import Quiz from '../Components/Quiz';



const TopContainer = () => {
    const [dinos, setDinos] = useState([]);
    const [randomDino, setRandomDino] = useState([]);
    const [filteredDino, setFilteredDino] = useState([])
    const [filterTrigger, setFilterTrigger] = useState();
    const [favDino, setFavDino] = useState([]);
    const [quizDinos, setQuizDinos] = useState([]);
    const [trueDino, setTrueDino] = useState([])


    useEffect(() => {
        getDinos().then((data) => setDinos(data));
        getFavDinos().then((data) => setFavDino(data));

    }, []);

    useEffect(() => {
        if (quizDinos) {
            const randomIndex = () => { return Math.floor(Math.random() * (quizDinos.length + 0) + 0) }
            const randint = randomIndex()
            setTrueDino(quizDinos[randint])
        }
    }, [quizDinos])

    const onRandomDino = () => {
        const randomIndex = () => { return Math.floor(Math.random() * (dinos.length + 0) + 0) }
        const randint = randomIndex()
        setRandomDino([dinos[randint]])
    }


    const onCriteriaSelected = (filterCriteria) => {
        const [key, value] = filterCriteria.split(',')
        if (key === 'all') { setFilterTrigger(false) } else {
            const filteredByCriteria = dinos.filter((dino) => dino[key] === value)
            setFilteredDino(filteredByCriteria)
            setFilterTrigger(true)
        }
    }

    const onSearchInput = async (searchTerm) => {
        const searchDino = dinos.filter((dino) => { return dino.name.toLowerCase().includes(searchTerm.toLowerCase()) })
        await setFilteredDino(searchDino)
        await setFilterTrigger(true)

    }
    const onFavoriteSelect = async (dinoToFav) => {
        if (favDino.length === 0) { setFavDino([dinoToFav]) } else {
            const favDinoCopy = [...favDino]
            await favDinoCopy.push(dinoToFav)
            setFavDino(favDinoCopy)
        }
    }
    const onFavoriteDelete = (id) => {
        const filterFavDinoArr = favDino.filter((dino) => dino._id !== id)
        setFavDino(filterFavDinoArr)
    }

    const randomSeed = (randInt) => {
        let doono = [];
        randInt.forEach((int) => doono.push(dinos[int]));
        setQuizDinos(doono)
    }


    return (

        <>
            <NavBar />


            <Routes>
                <Route path="/dinolist" element={<DinoList dinos={dinos} onFavoriteSelect={onFavoriteSelect} onFavoriteDelete={onFavoriteDelete} />} />
                <Route path="/randomdino" element={<RandomDino randomDino={randomDino} onRandomDino={onRandomDino} onFavoriteSelect={onFavoriteSelect} onFavoriteDelete={onFavoriteDelete} />} />




                {<Route path="/finddino"
                    element={<FindDino onCriteriaSelected={onCriteriaSelected}
                        dinos={filterTrigger ? filteredDino : dinos} onSearchInput={onSearchInput} onFavoriteSelect={onFavoriteSelect} onFavoriteDelete={onFavoriteDelete} />}
                />

                }

                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<Quiz dinos={dinos} randomSeed={randomSeed} quizDinos={quizDinos} trueDino={trueDino} />} />

                <Route path="/favdinos" element={<FavDino favDino={favDino} onFavoriteDelete={onFavoriteDelete} />} />
            </Routes>
        </>
    )


};

export default TopContainer;