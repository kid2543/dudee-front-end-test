import React, { useEffect, useState } from "react";
import WashingMachineImage from "../assets/washing.png";
import Modal from "./Modal";
import { WashingMachineProps } from "../types/MachineInterfaces";

const WashingMachine: React.FC<WashingMachineProps> = ({
  id,
  minutes,
  seconds,
  price,
  size,
  status,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [time, setTime] = useState({ minutes: 2, seconds: 0 });

  useEffect(() => {
    if (time.minutes === 0 && time.seconds === 0) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: prev.minutes, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="p-3 rounded border">
      <div className=" flex justify-between">
        <h1 className="mb-3">
          Washing Machine: {id} ({size}KG)
        </h1>
        {status ? (
          <div className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-gray-500/10 ring-inset">
            Avaliable
          </div>
        ) : (
          <div className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-600 ring-1 ring-gray-500/10 ring-inset">
            Unavaliable
          </div>
        )}
      </div>
      <div className="mb-3">
        <img
          src={WashingMachineImage}
          alt="washing machine"
          className="w-1/2 mx-auto"
        />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl">
          {time?.minutes} : {time?.seconds}
        </h1>
      </div>
      <div className="text-center">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-200 text-blue-500 px-3 py-1 font-semibold rounded"
        >
          Ready to use
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Washing Machine: 1"
      />
    </div>
  );
};

export default WashingMachine;
