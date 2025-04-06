import { useEffect, useReducer } from 'react';
import { GameLayout } from './GameLayout';
import { store } from '../../store';

export const GameContainer = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      forceUpdate();
    });

    return unsubscribe;
  }, []);

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
