// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

//styled components
const Container = styled.div`
    border: 4px solid;
    border-color: ${pr => pr.theme.outlineColor};
    width:40%;
    background-color:${pr => pr.theme.primaryColor};
    opacity:0.5;

    h2, h3 {
        color:white;
        font-size: 2rem;
    }

    div {
        width:100%;
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-evenly;
    }
`

const Character = ({ character }) => {
    
    return (
        <Container>
            <h2>{character.name}</h2>
            <div>
                <h3>Born: {character.birth_year}</h3>
                <h3>Gender: {character.gender}</h3>
            </div>
        </Container>
    );
}

export default Character;