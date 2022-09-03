import React, { useState, useEffect } from 'react'
import DinoItem from './DinoItem';
const FindDino = ({ dinos, onTypeSelected }) => {
    const [filterType, setFilterType] = useState([]);


    useEffect(() => {
        loadFIlters();
    }, [])


    const loadFIlters = async () => {
        const filterTypeArr = await [...new Set(dinos.map(dino => { return dino.type }))]
        setFilterType(filterTypeArr)

    }

    if (dinos === null) { <p>Loading</p> } else {
        const dinoTypes = filterType.map((type, index) => { return <option key={index} value={type}>{type}</option> })

        const handleTypeChange = (event) => {
            console.log(event.target.value)
            onTypeSelected(event.target.value)
        }

        const showDinos = dinos.map((dino, index) => { return <DinoItem dino={dino} key={index}/> })






        return (



            // <p>filter page, should be able to filter data, also maybe have a search function based on name</p>
            <>
                <select defaultValue="" onChange={handleTypeChange}>
                    <option value="" >Filter by type</option>
                    <option value="all">Show All</option>
                    {dinoTypes}

                </select>
                {showDinos}


            </>
        )


    };
}
export default FindDino;