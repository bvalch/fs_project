import React from 'react';
import DinoItem from '../Components/DinoItem';
import DinoList from '../Components/DinoList';
import DinoService from '../Components/DinoService';
import FavDino from '../Components/FavDino';
import FindDino from '../Components/FindDino';
import HomePage from '../Components/HomePage';
import NavBar from '../Components/NavBar';
import RandomDino from '../Components/RandomDino';
import {render, fireEvent} from '@testing-library/react';
import {findRenderedComponentWithType} from 'react-dom/test-utils';
import TopContainer from '../container/TopContainer';

describe('DinoItem', () => {
    let container;

    const testDino={
        name: "Velociraptor",
        diet: "carnivorous",
        period: "Late Cretaceous 74-70 million years ago",
        lived_in: "Mongolia",
        type: "small theropod",
        length: "1.8m",
        taxonomy: "Dinosauria Saurischia Theropoda Neotheropoda Tetanurae Avetheropoda Coelurosauria Tyrannoraptora Maniraptoriformes Maniraptora Paraves Eumaniraptora Dromaeosauridae",
        named_by: "Osborn (1924)",
        species: "mongoliensis",
        link: "https://www.nhm.ac.uk/discover/dino-directory/velociraptor.html",
        image: "images/velociraptor.png"
    };

    beforeEach(() => {
        container = render(<DinoItem dino={testDino}/>);
    });

    it('should return dinosaur name', () => {
        const dinosaurName = container.getByTestId("dinoName")
        expect(dinosaurName.textContent).toEqual("Velociraptor")
    });

    it('should return dinosaur period', () => {
        const dinosaurPeriod = container.getByTestId("dinoPeriod")
        expect(dinosaurPeriod.textContent).toEqual("Late Cretaceous 74-70 million years ago")
    });

    it('should return the dinosaurs diet', () => {
        const dinosaurDiet = container.getByTestId("dinoDiet")
        expect(dinosaurDiet.textContent).toEqual("carnivorous")
    });

    it('should return the dinosaurs type', () => {
        const dinosaurType = container.getByTestId("dinoType")
        expect(dinosaurType.textContent).toEqual("small theropod")
    });

})