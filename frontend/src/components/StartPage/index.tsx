import { Box, Button, IconButton, Typography } from '@mui/material';
import './style.scss';
import { useEffect, useState } from 'react';
import { useGetCategoryByIdQuery } from '../../feature/services/categoryApi';
import { RefreshOutlined } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';
import { useGetJokeQuery } from '../../feature/services/jokesApi';
import { useGetSloganQuery } from '../../feature/services/sloganApi';

const StartPage = () => {
  const { data: joke, isError, refetch: refetchJoke } = useGetJokeQuery();
  const { data: slogan, refetch: refetchSlogan } = useGetSloganQuery();
  const { data: category } = useGetCategoryByIdQuery(slogan?.categoryId ?? '');
  const [gameStatus, setGameStatus] = useState<'START' | 'STOP'>('STOP');
  const [time, setTime] = useState('2:00');
  const [timeInterval, setTimeInterval] = useState<any>();
  const navigate = useNavigate();

  const startGame = () => {
    let totalSeconds = 119;
    refetchSlogan();
    setGameStatus('START');

    const interval = setInterval(() => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const resTime = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

      setTime(resTime);

      if (totalSeconds === 0) {
        clearInterval(interval);
        stopGame();
      }

      totalSeconds -= 1;
    }, 1000);

    setTimeInterval(interval);
  };

  const stopGame = () => {
    clearInterval(timeInterval);
    setGameStatus('STOP');
    setTime('2:00');
  };

  useEffect(() => {
    if (gameStatus === 'STOP') {
      refetchJoke();
    }
  }, [gameStatus]);

  return (
    <Box className="start-page">
      <Box className="header">
        <Typography>{time}</Typography>
        {gameStatus === 'START' ? (
          <Button onClick={refetchSlogan} startIcon={<RefreshOutlined />}>
            Change
          </Button>
        ) : (
          <IconButton color="primary" onClick={() => navigate('/settings')}>
            <SettingsIcon />
          </IconButton>
        )}
      </Box>
      {gameStatus === 'STOP' ? (
        <>
          <Box className="content">
            <Typography variant="h1">Kalambury</Typography>
            <Button variant="contained" onClick={startGame}>
              Start
            </Button>
          </Box>
          <Box className="joke">
            <Typography>{isError ? 'There was an error loading joke' : joke?.joke}</Typography>
          </Box>
        </>
      ) : (
        <>
          <Box className="content">
            <Typography variant="subtitle1">{category?.name}</Typography>
            <Typography variant="h2">{slogan?.name}</Typography>
          </Box>
          <Box className="stop">
            <Button variant="contained" onClick={stopGame}>
              STOP
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default StartPage;
