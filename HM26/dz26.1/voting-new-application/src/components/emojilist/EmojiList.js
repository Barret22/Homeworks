import React, { useState } from 'react';
import EmojiItem from '../emojiitem/EmojiItem';

const EmojiList = () => {
    const [emojis, setEmojis] = useState([
        { id: 1, symbol: "😀", count: 0 },
        { id: 2, symbol: "😅", count: 0 },
        { id: 3, symbol: "😎", count: 0 },
        { id: 4, symbol: "😍", count: 0 },
        { id: 5, symbol: "🤩", count: 0 }
    ]);

    const handleClick = (id) => {
        setEmojis(emojis.map(emoji =>
            emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji
        ));
    };

    return (
        <div className="d-flex justify-content-around mt-4">
            {emojis.map(emoji => (
                <EmojiItem
                    key={emoji.id}
                    emoji={emoji.symbol}
                    count={emoji.count}
                    onClick={() => handleClick(emoji.id)}
                />
            ))}
        </div>
    );
};

export default EmojiList;
