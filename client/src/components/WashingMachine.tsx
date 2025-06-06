import React, { useState } from "react";
import WashingMachineImage from '../assets/washing.png'
import Modal from "./Modal";

function WashingMachine() {

    const [isModalOpen, setModalOpen] = useState(false)

  return (
    <div className="p-3 rounded border">
      <div className=" flex justify-between">
        <h1 className="mb-3">Washing Machine: 1 (9kg)</h1>
        <div className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-600 ring-1 ring-gray-500/10 ring-inset">
            Working
        </div>
      </div>
      <div>
        <img src={WashingMachineImage} alt="washing machine" className="w-1/2 mx-auto" />
      </div>
      <div className="text-center">
        <button onClick={() => setModalOpen(true)} className="bg-indigo-500 px-3 py-1 text-white font-semibold rounded">Use this machine</button>
      </div>
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Washing Machine: 1"
      />
    </div>
  );
}

export default WashingMachine;
