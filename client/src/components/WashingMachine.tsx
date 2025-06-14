import React, { useEffect, useState } from "react";
import WashingMachineImage from "../assets/washing.png";
import Modal from "./Modal";
import { WashingMachineProps } from "../types/MachineInterfaces";
import { sendLineAlert } from "../utils/sendAlert";
import { toast } from "react-toastify";
import Spiner from "./Spiner";

interface Time {
  minutes: number;
  seconds: number;
}

const WashingMachine: React.FC<WashingMachineProps> = ({
  id,
  minutes,
  seconds,
  price,
  size,
  status,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [time, setTime] = useState<Time>({ minutes: 0, seconds: 0 });
  const [isRuning, setIsRuning] = useState(false);

  useEffect(() => {
    if (!isRuning) return;

    if (time.minutes === 0 && time.seconds === 0) {
      const groupId = process.env.REACT_APP_GROUP_ID || "";
      sendLineAlert(groupId, `Cloth Washing Machine ${id} has been washed`);
      toast(`Cloth Washing Machine ${id} has been washed`);
      setIsRuning(false);
      return;
    }

    if (time.minutes === 1 && time.seconds === 0) {
      const groupId = process.env.REACT_APP_GROUP_ID || "";
      sendLineAlert(groupId, `Washing Machine ${id} has 1 minute left to dry.`);
      toast(`Washing Machine ${id} has 1 minute left to dry.`);
    }

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: prev.minutes, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time, isRuning, id]);

  return (
    <div className="p-3 rounded border">
      <div className="flex justify-between">
        <h1 className="mb-3">
          Washing Machine: {id} ({size}KG)
        </h1>
        {!isRuning ? (
          <div className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-gray-500/10 ring-inset">
            Avaliable
          </div>
        ) : (
          <div className="inline-flex items-center rounded-md bg-amber-50 px-2 py-1 text-xs font-medium text-amber-600 ring-1 ring-gray-500/10 ring-inset">
            Working
          </div>
        )}
      </div>
      <div className="mb-3">
        {!isRuning ? (
          <img
            src={WashingMachineImage}
            alt="washing machine"
            className="w-1/2 mx-auto"
          />
        ) : (
          <div className="">
            <Spiner />
          </div>
        )}
      </div>
      <div className="text-center">
        <h1 className="font-bold text-xl mb-3">
          {time?.minutes} : {time?.seconds}
        </h1>
      </div>
      <div className="text-center">
        {!isRuning && (
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-200 text-blue-500 px-3 py-1 font-semibold rounded"
          >
            Ready to use
          </button>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={`Washing Machine ${id}`}
        id={id}
        price={price}
        size={size}
        status={status}
        setTime={setTime}
        onStart={() => setIsRuning(true)}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};

export default WashingMachine;
