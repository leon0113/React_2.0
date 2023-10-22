/* eslint-disable react/prop-types */

const ColorButton = ({ color, onClick }) => {
  return (
    <button
      onClick={() => onClick(color)}
      className="outline-none px-4 text-white rounded-3xl"
      style={{ backgroundColor: color }}
    >
      {color}
    </button>
  );
};

export default ColorButton;