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
        period: "Early Jurassic 199-189 million years ago"
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
        expect(dinosaurPeriod.textContent).toEqual("Early Jurassic 199-189 million years ago")
    });

})