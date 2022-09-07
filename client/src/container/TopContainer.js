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
import FlappyDino from '../Components/FlappyDino';
import KerimQuiz from '../Components/KerimQuiz';






const TopContainer = () => {
    const [dinos, setDinos] = useState([]);
    const [randomDino, setRandomDino] = useState([]);
    const [filteredDino, setFilteredDino] = useState([])
    const [filterTrigger,setFilterTrigger]=useState();
    const [favDino,setFavDino]=useState([]);

    useEffect(  () => {
        const randomInt=(Math.floor(Math.random() * (50 + 0) + 0))
        getDinos().then((data) => setDinos(data));
        getFavDinos().then((data)=>setFavDino(data));
        getDinos().then((data)=>setRandomDino([data[randomInt]]))         
        
    }, []);

    

    const onRandomDino = () => {
        const randomIndex = () => { return Math.floor(Math.random() * (dinos.length + 0) + 0) }
        const randint = randomIndex()
        setRandomDino([dinos[randint]])
    };


    const onCriteriaSelected = (filterCriteria) => {
        const [key,value]=filterCriteria.split(',')
        if (key === 'all') { setFilterTrigger(false) } else {
            const filteredByCriteria = dinos.filter((dino) => dino[key] === value)
            setFilteredDino(filteredByCriteria)
            setFilterTrigger(true) 
        }
    };

    const onSearchInput=async (searchTerm)=>{
        const searchDino=dinos.filter((dino)=>{return dino.name.toLowerCase().includes(searchTerm.toLowerCase())})
        await setFilteredDino(searchDino)
        await setFilterTrigger(true)
    
    };
        const onFavoriteSelect=async(dinoToFav)=>{   
        if(favDino.length===0){setFavDino([dinoToFav])}else{
         const favDinoCopy=[...favDino]
         await favDinoCopy.push(dinoToFav)
         setFavDino(favDinoCopy)
        }
        };

        const onFavoriteDelete=(id)=>{
        console.log('hello')
         const filterFavDinoArr=favDino.filter((dino)=>dino._id !== id)
         setFavDino(filterFavDinoArr)   

        };

        


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
 
                <Route path="/flappydino" element={<FlappyDino/>}/>

                {/* <Route path="/quiz" element={<Quiz dinos={dinos} randomSeed={randomSeed} quizDinos={quizDinos} trueDino={trueDino} />} /> */}
                <Route path="/kerimquiz" element={<KerimQuiz dinos={dinos} />} />
 

                <Route path="/favdinos" element={<FavDino favDino={favDino} onFavoriteDelete={onFavoriteDelete}  />} />
            </Routes>
        </>
    )


};

export default TopContainer;