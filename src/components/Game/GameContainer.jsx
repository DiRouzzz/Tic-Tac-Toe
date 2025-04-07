import { useState, useEffect } from 'react';
import { GameLayout } from './GameLayout';
import { store } from '../../reducer';

export const GameContainer = () => {
  const [_, setRender] = useState(0);

  useEffect(() => store.subscribe(() => setRender((r) => r + 1)), []);

  const { field, currentPlayer, isGameEnded, statusGame } = store.getState();

  return (
    <GameLayout
      field={field}
      statusGame={statusGame}
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      onClickResetGame={() => store.dispatch({ type: 'RESET' })}
    />
  );
};
