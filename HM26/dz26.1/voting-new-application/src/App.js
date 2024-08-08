import React from 'react';
import EmojiList from './components/emojilist/EmojiList';

function App() {
  return (
      <div className="container text-center mt-5">
        <h1>Голосування за найкращий смайлик</h1>
        <EmojiList />
      </div>
  );
}

export default App;
