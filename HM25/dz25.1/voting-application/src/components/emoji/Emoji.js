import React from "react";

const Emoji = ({ emoji, count, onClick }) => {
    return (
        <div className="emoji" onClick={onClick}>
      <span role="img" aria-label="emoji" style={{ fontSize: "50px" }}>
        {emoji}
      </span>
            <div>{count}</div>
        </div>
    );
};

export default Emoji;
