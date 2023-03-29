import React, { useState } from 'react';
import FlashCard from './flashcard';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function FlashCardList({ cards, cardsPerPage = 1, onRemove }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const currentCards = cards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleRemove = (index) => {
    const actualIndex = (currentPage - 1) * cardsPerPage + index;
    onRemove(actualIndex);
  };

  return (
    <Container maxWidth='md'>
      <Grid container spacing={2} justifyContent='center'>
        {currentCards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FlashCard
              front={card.front}
              back={card.back}
              onRemove={() => handleRemove(index)}
            />
          </Grid>
        ))}
      </Grid>
      <Box display='flex' justifyContent='center' mt={2}>
        <Button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </Button>
        <Button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </Button>
      </Box>
    </Container>
  );
}

export default FlashCardList;
