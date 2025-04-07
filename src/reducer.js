import { createStore } from './store';

const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  field: Array(9).fill(''),
  statusGame: '',
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'MOVE':
      if (state.isGameEnded || state.field[action.payload]) return state;

      const newField = [...state.field];
      newField[action.payload] = state.currentPlayer;

      const winner = checkWin(newField);
      const isDraw = newField.every((cell) => cell) && !winner;

      return {
        ...state,
        field: newField,
        currentPlayer: winner
          ? state.currentPlayer
          : state.currentPlayer === 'X'
            ? 'O'
            : 'X',
        isGameEnded: winner || isDraw,
        statusGame: winner
          ? `Победил игрок: ${state.currentPlayer}`
          : isDraw
            ? 'Ничья!'
            : '',
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

function checkWin(field) {
  const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return WIN_PATTERNS.some(
    ([a, b, c]) => field[a] && field[a] === field[b] && field[a] === field[c]
  );
}

export const store = createStore(gameReducer);
