import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockFetchShow from '../../api/fetchShow';


import Display from './../Display';
import { wait } from '@testing-library/user-event/dist/utils';


jest.mock('../../api/fetchShow')

const testShow = {
    name: "test show",
    summary: "test summary",
    seasons: [{
        id:0,
        name: 'season 1',
        episodes: []
    },
    {    
        id:1,
        name: 'season 2',
        episodes: []
    }]
}

test('renders without errors with no props', ()=>{
 render(<Display/>);
});

test('renders Show component when the button is clicked ',()=>{    
    
    render(<Display/>);

    const button = screen.queryByRole('button');
    userEvent.click(button);
    const show = screen.findAllByTestId(/show-container/i)
    expect(show).toHaveLength(1);
});

test('renders show season options matching your data when the button is clicked', async ()=>{
    mockFetchShow.mockResolvedValueOnce(testShow);
   
    render(<Display/>);

    const button = screen.queryByRole('button');
    userEvent.click(button);

    await waitFor(()=> {
        const seasonOptions = screen.queryAllByTestId('season-option');
        expect(seasonOptions).toHaveLength(2);
    });
});

test('displayFunc is call when the fetch button is pressed', async()=>{
    mockFetchShow.mockResolvedValueOnce(testShow);
    const displayFunc=jest.fn();

    render(<Display displayFunc = {displayFunc}/>);
    const button = screen.queryByRole('button');
    userEvent.click(button);

    await waitFor(()=>{
        expect(displayFunc).toHaveBeenCalled();
    })

});k