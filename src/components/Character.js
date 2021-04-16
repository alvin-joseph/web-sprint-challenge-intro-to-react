// Write your Character component here
import React from 'react';
import styled, { keyframes } from 'styled-components';

//styled components
const Kf = keyframes`
    100%{
        opacity:0.7;
    }
`
const Container = styled.div`
    opacity:0;
    border: 4px solid;
    border-color: ${pr => pr.theme.outlineColor};
    width:40%;
    background-color:${pr => pr.theme.primaryColor};

    &:hover {
        background-color: ${pr => pr.theme.hoverBackground};
        transform: scale(1.1);
        transition: all .7s ease;
    }

    h2, h3 {
        color: ${pr => pr.theme.text};
        font-size: 2rem;
        font-family: 'Black Ops One', cursive;
    }

    div {
        width:100%;
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content: space-evenly;
    }
    transition: all .5s ease-in-out;
    animation: ${Kf} 2s ease-in-out forwards;
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