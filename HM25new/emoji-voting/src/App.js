import React from 'react';
import EmojiList from './Components/EmojiList/EmojiList.js';
import Results from './Components/Results/Results.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    const initialVotes = JSON.parse(localStorage.getItem('votes')) || {
      '😀': 0,
      '😊': 0,
      '😎': 0,
      '🤩': 0,
      '😍': 0,
    };

    this.state = {
      votes: initialVotes,
      winner: null,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem('votes', JSON.stringify(this.state.votes));
    }
  }

  handleVote = (emoji) => {
    this.setState((prevState) => ({
      votes: {
        ...prevState.votes,
        [emoji]: prevState.votes[emoji] + 1,
      },
    }));
  };

  handleShowResults = () => {
    const { votes } = this.state;
    const winner = Object.keys(votes).reduce((a, b) => (votes[a] > votes[b] ? a : b));
    this.setState({ winner });
  };

  handleReset = () => {
    const initialVotes = {
      '😀': 0,
      '😊': 0,
      '😎': 0,
      '🤩': 0,
      '😍': 0,
    };

    this.setState({
      votes: initialVotes,
      winner: null,
    });

    localStorage.removeItem('votes');
  };

  render() {
    const { votes, winner } = this.state;

    return (
        <div className="container text-center mt-5">
          <h1>Голосування за найкращий смайлик</h1>
          <EmojiList emojis={Object.keys(votes)} votes={votes} onVote={this.handleVote} />
          <button onClick={this.handleShowResults} className="btn btn-success mt-3">
            Підрахунок голосів
          </button>
          <Results winner={winner} votes={votes} onReset={this.handleReset} />
        </div>
    );
  }
}

export default App;
