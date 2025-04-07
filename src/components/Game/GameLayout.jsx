import styles from './game.module.css';
import { InformationContainer } from '../Information/InformationContainer';
import { FieldContainer } from '../Field/FieldContainer';

export const GameLayout = ({
  field,
  statusGame,
  currentPlayer,
  isGameEnded,
  onClickResetGame,
}) => {
  return (
    <>
      <div className={styles.gameContainer}>
        <h1>Крестики-нолики</h1>
        <InformationContainer
          statusGame={statusGame}
          currentPlayer={currentPlayer}
        />
        <FieldContainer field={field} />
        <button onClick={onClickResetGame}>🔄 Начать заново</button>
      </div>
      {isGameEnded && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Статус: {statusGame}</h2>
            <button onClick={onClickResetGame}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};
