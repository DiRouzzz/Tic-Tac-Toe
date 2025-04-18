export const InformationLayout = ({ statusGame, currentPlayer }) => {
  return (
    <div className="text-2xl mb-4 font-bold text-white">
      <div>
        Ход: <span>{currentPlayer}</span>
      </div>
      <div>
        Статус: <span>{statusGame}</span>
      </div>
    </div>
  );
};
