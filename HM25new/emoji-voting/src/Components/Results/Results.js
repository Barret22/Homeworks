import React from 'react';
import './Results.css';

class Results extends React.Component {
    render() {
        const { winner, votes } = this.props;

        return (
            <div className="results-container">
                <h2>Переможець</h2>
                {winner ? (
                    <>
                        <div className="winner-emoji" style={{ fontSize: '64px' }}>
                            {winner}
                        </div>
                        <p>Кількість голосів: {votes[winner]}</p>
                    </>
                ) : (
                    <p>Поки що ніхто не переміг</p>
                )}
                <button onClick={this.props.onReset} className="btn btn-danger mt-3">
                    Очистити результати
                </button>
            </div>
        );
    }
}

export default Results;
