import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, waitFor, awaiy} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchShow from '../../api/fetchShow';


import Display from './../Display';
import Show from '../Show'

jest.mock('../../api/fetchShow')

test('renders without errors with no props', ()=>{
 render(<Display/>);
});

test('renders Show component when the button is clicked ', async ()=>{    
    
    render(<Display/>);

    const button = screen.queryByRole('button');
    userEvent.click(button);
    const show = await screen.findAllByTestId(/show-container/i)
    expect(show).toHaveLength(1);
});

test('renders show season options matching your data when the button is clicked', async()=>{
    
    {name: 'Stranger Things', image: {…}, summary: "A love letter to the '80s classics that captivated…rnatural forces and one very strange little girl.", seasons: Array(4)}
    render(<Display/>);

    const button = screen.queryByRole('button');
    userEvent.click(button);



});
