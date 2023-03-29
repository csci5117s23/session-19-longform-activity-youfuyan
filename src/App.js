import React, { useState } from 'react';
import './App.css';
import FlashCardList from './FlashCardList';
import FlashCardBuilder from './FlashCardBuilder';

function App() {
  const [questions, setQuestions] = useState([
    {
      front: 'Fun Fact 1',
      back: 'Huskies have a double coat that keeps them warm in cold climates.',
    },
    {
      front: 'Fun Fact 2',
      back: 'Huskies are known for their striking blue eyes',
    },
    {
      front: 'Fun Fact 3',
      back: 'Huskies are were originally bred for sled pulling.',
    },
  ]);
  // const addCard = (card) => {
  //   setQuestions([...questions, card]);
  // };

  const handleAddCard = (front, back) => {
    setQuestions([...questions, { front, back }]);
  };

  const handleRemoveCard = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  return (
    <div className='App'>
      <FlashCardList cards={questions} onRemove={handleRemoveCard} />
      <FlashCardBuilder onAdd={handleAddCard} />
    </div>
  );
}

export default App;
