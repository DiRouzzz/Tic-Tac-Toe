import { GameLayout } from './GameLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectorField,
  selectorCurrentPlayer,
  selectorIsGameEnded,
  selectorStatusGame,
} from '../../selectors';

export const GameContainer = () => {
  const dispatch = useDispatch();

  const field = useSelector(selectorField);
  const currentPlayer = useSelector(selectorCurrentPlayer);
  const isGameEnded = useSelector(selectorIsGameEnded);
  const statusGame = useSelector(selectorStatusGame);

  return (
    <GameLayout
      field={field}
      statusGame={statusGame}
      currentPlayer={currentPlayer}
      isGameEnded={isGameEnded}
      onClickResetGame={() => dispatch({ type: 'RESET' })}
    />
  );
};
