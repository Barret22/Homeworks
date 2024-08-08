import React, { useState, useEffect } from "react";
import Emoji from "../emoji/Emoji";
import Results from "../results/Results";
import Buttons from "../buttons/Buttons";

const EmojiVote = () => {
    const initialVotes = JSON.parse(localStorage.getItem("votes")) || {
        "😀": 0,
        "😊": 0,
        "😎": 0,
        "😍": 0,
        "😘": 0,
    };

    const [votes, setVotes] = useState(initialVotes);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        localStorage.setItem("votes", JSON.stringify(votes));
    }, [votes]);

    const handleVote = (emoji) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [emoji]: prevVotes[emoji] + 1,
        }));
    };

    const showResults = () => {
        const maxVotes = Math.max(...Object.values(votes));
        const winnerEmoji = Object.keys(votes).find(
            (emoji) => votes[emoji] === maxVotes
        );
        setWinner(winnerEmoji);
    };

    const clearResults = () => {
        setVotes({
            "😀": 0,
            "😊": 0,
            "😎": 0,
            "😍": 0,
            "😘": 0,
        });
        setWinner(null);
        localStorage.removeItem("votes");
    };

    return (
        <div className="container text-center mt-5">
            <h1>Голосування за найкращий смайлик</h1>
            <div className="d-flex justify-content-around mt-4">
                {Object.keys(votes).map((emoji) => (
                    <Emoji
                        key={emoji}
                        emoji={emoji}
                        count={votes[emoji]}
                        onClick={() => handleVote(emoji)}
                    />
                ))}
            </div>
            <Buttons showResults={showResults} clearResults={clearResults} />
            {winner && <Results winner={winner} votes={votes[winner]} />}
        </div>
    );
};

export default EmojiVote;
