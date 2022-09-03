import React, { useState, useEffect } from 'react'
import DinoItem from './DinoItem';
const FindDino = ({ dinos, onCriteriaSelected }) => {
    const [filterType, setFilterType] = useState([]);
    const [filterDiet, setFilterDiet] = useState([]);

    useEffect(() => {
        loadFIlters();
    }, [])

    const loadFIlters = async () => {
        const filterTypeArr = await [...new Set(dinos.map(dino => { return dino.type }))]
        setFilterType(filterTypeArr)

        const filterDietArr = await [...new Set(dinos.map(dino => { return dino.diet }))]
        setFilterDiet(filterDietArr)
    }

    if (dinos === null) { <p>Loading</p> } else {
        const dinoTypes = filterType.map((type, index) => { return <option key={index} value={['type',type]}>{type}</option> })

        const dinoDiet = filterDiet.map((diet, index) => { return <option key={index} value={['diet',diet]}>{diet}</option> })



        const handleTypeChange = (event) => {
            // console.log(event.target.value)
            onCriteriaSelected(event.target.value)
        }

        const handleDietChange=(event)=>{
            onCriteriaSelected(event.target.value)
        }
        const showDinos = dinos.map((dino) => { return <DinoItem dino={dino} /> })






        return (



            // <p>filter page, should be able to filter data, also maybe have a search function based on name</p>
            <>
                <select defaultValue="" onChange={handleTypeChange}>
                    <option value="" >Filter by type</option>
                    <option value="all">Show All</option>
                    {dinoTypes}
                </select>
                <select defaultValue="" onChange={handleDietChange}>
                    <option value="" >Filter by diet</option>
                    <option value="['all',all]">Show All</option>
                    {dinoDiet}
                </select>


                {showDinos}


            </>
        )


    };
}
export default FindDino;