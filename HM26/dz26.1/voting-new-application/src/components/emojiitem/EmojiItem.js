import React from 'react';

const EmojiItem = ({ emoji, count, onClick }) => {
    return (
        <div style={{ textAlign: 'center', margin: '10px' }}>
      <span
          role="img"
          aria-label="emoji"
          style={{ fontSize: '50px', cursor: 'pointer' }}
          onClick={onClick}
      >
        {emoji}
      </span>
            <div>{count}</div>
        </div>
    );
};

export default EmojiItem;
