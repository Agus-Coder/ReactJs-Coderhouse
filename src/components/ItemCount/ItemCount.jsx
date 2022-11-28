import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";


const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const removeOneFromCounter = () => setCounter(counter - 1);
  const addToCounter = () => setCounter(counter + 1);
  const stockCounter = () => setCounter(stock);

  const subtractButton = counter > initial ? removeOneFromCounter : undefined;
  const addButton = counter < stock ? addToCounter : stockCounter;

  return (
    <>
      <button
        onClick={subtractButton}
        className="mx-5 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm text-gray-100 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none rounded-md"
      >
        <FaMinus />
      </button>
      <h3 className="text-xl sm:text-3xl text-gray-800">{counter}</h3>
      <button
        onClick={addButton}
        className="mx-5 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm text-gray-100 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none rounded-md"
      >
        <FaPlus />
      </button>
      <button
        onClick={() => onAdd(counter)}
        className="ml-5 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-xs sm:text-sm text-gray-100 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none rounded-md"
      >
        Agregar
      </button>
    </>
  );
};

export default ItemCount;