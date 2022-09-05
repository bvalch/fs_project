import React, { useState, useEffect } from 'react'
import DinoDetail from './DinoDetail';
const FindDino = ({ dinos, onCriteriaSelected,onSearchInput,onFavoriteSelect,onFavoriteDelete }) => {
    const [filterType, setFilterType] = useState([]);
    const [filterDiet, setFilterDiet] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState();

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
        const dinoTypes = filterType.map((type, index) => { return <option key={index} value={['type', type]}>{type}</option> })

        const dinoDiet = filterDiet.map((diet, index) => { return <option key={index} value={['diet', diet]}>{diet}</option> })



        const handleTypeChange = (event) => {
            // console.log(event.target.value)
            onCriteriaSelected(event.target.value)
        }

        const handleDietChange = (event) => {
            onCriteriaSelected(event.target.value)
        }

        const handleSubmit = (event) => {
            event.preventDefault();
        }
        const handleSearchTerm = (event) => {
            onSearchInput(event.target.value);

        }


        const showDinos = dinos.map((dino, index) => { return <DinoDetail dino={dino} key={index} onFavoriteSelect={onFavoriteSelect} onFavoriteDelete={onFavoriteDelete} /> })






        return (



            // <p>filter page, should be able to filter data, also maybe have a search function based on name</p>
            <div>
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

                <form type="text" onSubmit={handleSubmit} >
                    <input value={searchCriteria} placeholder="search dinos" onChange={handleSearchTerm}></input>

                </form>

                <div>
                {showDinos}
                </div>


            </div>
        )


    };
}
export default FindDino;