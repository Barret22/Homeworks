import React from 'react';
import './EmojiList.css';

class EmojiList extends React.Component {
    render() {
        const { emojis, votes, onVote } = this.props;
        return (
            <div className="row">
                {emojis.map((emoji) => (
                    <div key={emoji} className="col text-center" onClick={() => onVote(emoji)}>
            <span role="img" aria-label="emoji" className="emoji">
              {emoji}
            </span>
                        <div>{votes[emoji]}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default EmojiList;