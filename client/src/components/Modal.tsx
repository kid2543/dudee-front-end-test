import React, { useState } from "react";

interface ModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  size: number;
  price: number;
  status: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, id, size, price, status }) => {
  const [coin, setCoin] = useState(price)
  const startPrice = price

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        <h2 className="text-xl font-bold mb-4">{title} ({size}KG)</h2>
        <div className="mb-4">
          <form>
            <div className="grid grid-cols-3 gap-4">
              <div className="border px-3 rounded py-1">
                <input
                  defaultChecked
                  type="radio"
                  name="temp"
                  id="r-1"
                  value="cold"
                  onChange={() => setCoin(startPrice)}
                />
                <label htmlFor="r-1" className="ms-2">
                  Cold
                </label>
              </div>
              <div className="border px-3 rounded py-1">
                <input type="radio" name="temp" id="r-2" value="warm" onChange={() => setCoin(startPrice + 10)} />
                <label htmlFor="r-2" className="ms-2">
                  Warm
                </label>
              </div>
              <div className="border px-3 rounded py-1">
                <input type="radio" name="temp" id="r-3" value="hot" onChange={() => setCoin(startPrice + 20)} />
                <label htmlFor="r-3" className="ms-2">
                  Hot
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-between mb-3">
          {coin > 0 ? (
            <h1 className="text-[28px] font-bold">{coin} Bath</h1>
          ) : (
            <h1 className="text-[28px] font-bold text-green-300">Ready</h1>
          )}

          <div>
            <button
              disabled={coin !== 0}
              className="bg-green-200 disabled:bg-gray-300 disabled:text-gray-600 text-green-500 rounded font-semibold p-5"
            >
              Start
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => setCoin(coin - 10)}
            className="px-4 py-2 me-2 bg-gray-300 rounded hover:bg-gray-400 hover:outline outline-gray-300"
          >
            Insert coin
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
