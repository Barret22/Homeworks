import React from "react";

const Buttons = ({ showResults, clearResults }) => {
    return (
        <div>
            <button onClick={showResults} className="btn btn-success m-2">
                Підрахунок голосів
            </button>
            <button onClick={clearResults} className="btn btn-danger m-2">
                Очистити результати
            </button>
        </div>
    );
};

export default Buttons;
