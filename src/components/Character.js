// Write your Character component here
import React, { useEffect, useState } from 'react';

const Character = ({ character }) => {
    
    return (
        <div>
            <h2>{character.name}</h2>
            <h3>Born: {character.birth_year}</h3>
            <h3>Gender: {character.gender}</h3>
        </div>
    );
}

export default Character;