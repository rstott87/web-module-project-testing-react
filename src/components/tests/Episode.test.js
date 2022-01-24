import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 1,
    image: "",
    name: "string",
    season: 1,
    number: 1,
    summary: "This is a test summary",
    runtime: 1
}

const testEpisodeImage = {
    id: 1,
    image: null,
    name: "string",
    season: 1,
    number: 1,
    summary: "This is a test summary",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode}/>);
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode}/>);

    const summary = screen.queryByText(/This is a test summary/i)
    
    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent("test summary")

});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testEpisodeImage}/>);

    const image = screen.queryAllByAltText('https://static.tvmaze.com/uploads/images/medium_landscape/342/855786.jpg')

console.log(image)
    expect(image).toBeInTheDocument();


});
