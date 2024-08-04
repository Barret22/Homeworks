

import React from 'react';

const CharacterCard = ({ name, gender, birthYear }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Gender: {gender}</p>
                <p className="card-text">Birth Year: {birthYear}</p>
            </div>
        </div>
    );
};

export default CharacterCard;
