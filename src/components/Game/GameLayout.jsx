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
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-[250px]">
      <div className="bg-[#158b9b] p-5 rounded-lg shadow-md relative z-10">
        <h1 className="text-white text-2xl mb-2.5">Крестики-нолики</h1>

        <InformationContainer
          statusGame={statusGame}
          currentPlayer={currentPlayer}
        />

        <FieldContainer field={field} />

        <button
          onClick={onClickResetGame}
          className="mt-5 px-6 py-3 text-base font-bold bg-green-600 text-white rounded transition duration-300 
          ease-in-out hover:bg-green-700 hover:scale-105 transform cursor-pointer"
        >
          🔄 Начать заново
        </button>
      </div>
      {isGameEnded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl w-[90%] max-w-md text-center">
            <h2 className="text-lg font-semibold mb-4">Статус: {statusGame}</h2>
            <button
              onClick={onClickResetGame}
              className="px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
