import React from "react";

const Results = ({ winner, votes }) => {
    return (
        <div>
            <h2>Результати голосування:</h2>
            <h3>Переможець:</h3>
            <div style={{ fontSize: "60px" }}>{winner}</div>
            <p>Кількість голосів: {votes}</p>
        </div>
    );
};

export default Results;
