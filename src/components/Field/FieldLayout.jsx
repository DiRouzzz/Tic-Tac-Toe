export const FieldLayout = ({ field, onClickCell }) => {
  return (
    <div className="grid grid-cols-3 gap-2.5 justify-center mx-auto my-5 relative w-[380px]">
      {field.map((item, index) => (
        <div
          key={index}
          onClick={() => onClickCell(index)}
          data-value={item}
          data-index={index}
          className={`
            w-[120px] h-[120px] bg-white rounded-xl shadow-md
            text-5xl font-bold flex items-center justify-center
            transition-all duration-300 ease-in-out select-none
            ${item ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50 hover:scale-105'}
            ${item === 'X' && 'text-[90px] text-red-500 [text-shadow:2px_2px_5px_rgba(255,71,87,0.5)]'}
            ${item === 'O' && 'text-[90px] text-blue-500 [text-shadow:2px_2px_5px_rgba(30,144,255,0.5)]'}
          `}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
