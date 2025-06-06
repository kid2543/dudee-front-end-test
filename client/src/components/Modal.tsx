import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative">
        <h2 className="text-xl font-bold mb-4">{title} (9kg) 40 Bath</h2>
        <div className="mb-4">
          <form>
            <div className="grid grid-cols-3 gap-4">
              <div className="border px-3 rounded py-1">
                <input className="" type="radio" name="temp" id="r-1" value="cold" />
                <label htmlFor="r-1" className="ms-2">Cold</label>
              </div>
              <div className="border px-3 rounded py-1">
                <input className="" type="radio" name="temp" id="r-2" value="warm" />
                <label htmlFor="r-2" className="ms-2">Warm</label>
              </div>
              <div className="border px-3 rounded py-1">
                <input className="" type="radio" name="temp" id="r-3" value="hot" />
                <label htmlFor="r-3" className="ms-2">Hot</label>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-end">
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
