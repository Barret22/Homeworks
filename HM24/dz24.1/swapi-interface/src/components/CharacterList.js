

import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
    // Замість цього, згодом використовуйте API, поки що використовуйте фіктивні дані
    const characters = [
        { name: 'Luke Skywalker', gender: 'male', birthYear: '19BBY' },
        { name: 'Leia Organa', gender: 'female', birthYear: '19BBY' },
        // Додаткові персонажі
    ];

    return (
        <div className="container mt-5">
            <h2>Characters</h2>
            <div className="row">
                {characters.map((char, index) => (
                    <div className="col-md-4" key={index}>
                        <CharacterCard name={char.name} gender={char.gender} birthYear={char.birthYear} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CharacterList;
