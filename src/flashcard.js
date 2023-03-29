import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';
import huskyimage from './husky.webp';
function FlashCard({ front, back, onRemove }) {
  const [isFront, setIsFront] = useState(true);

  const handleClick = () => {
    setIsFront(!isFront);
  };

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
        color='error'
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <DeleteIcon />
      </IconButton>
      <Card
        onClick={handleClick}
        sx={{
          width: '100%',
          minHeight: 150,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          perspective: '1000px',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            position: 'relative',
            padding: 2,
          }}
        >
          <CardMedia
            component='img'
            alt='Husky'
            image={huskyimage}
            sx={{
              position: 'absolute',
              bottom: 0,
              zIndex: 0,
              opacity: isFront ? 1 : 0,
              transition: 'opacity 0.6s',
            }}
          />
          <Typography
            variant='h5'
            gutterBottom
            component='div'
            sx={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              position: 'absolute',
              backfaceVisibility: 'hidden',
              transform: isFront ? 'rotateY(0deg)' : 'rotateY(180deg)',
              transition: 'transform 0.6s',
              textAlign: 'center',
              width: '100%',
              bottom: 0,
              top: '125%',
              zIndex: 1,
            }}
          >
            {front}
          </Typography>
          <Typography
            variant='h5'
            component='div'
            sx={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              position: 'absolute',
              backfaceVisibility: 'hidden',
              transform: isFront ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transition: 'transform 0.6s',
              textAlign: 'center',
              width: '100%',
              zIndex: 1,
            }}
          >
            {back}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default FlashCard;
