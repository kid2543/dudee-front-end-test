import "./App.css";
import WashingMachine from "./components/WashingMachine";
import { mockMachine } from "./mocks/mockMachine";
import { ToastContainer } from "react-toastify";

function App() {
  const arr: number[] = [2, 3, 4, 4, 34, 6, 7, 2, 3, 7, 8, 8, 8, 7, 9, 10, 41, 8];

  //  จัดกลุ่มข้อมูลเพื่อกำหนดความถี่
  const frequencyMap: Record<number, number> = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {} as Record<number, number>)

  const sortedArr: number[] = arr.sort((a,b) => {
    // เรียงจากน้อยไปมาก หากความถี่เท่ากัน
    if(frequencyMap[a] === frequencyMap[b]) {
      return a - b
    }
    // เรียกจากความถี่น้อยไปมาก
      return frequencyMap[a] - frequencyMap[b]
  })
 
  console.log(sortedArr)

  // เรียงข้อมูลเครื่องซักผ้าจากความจุของเครื่องซัก
  const sortedMachine = [...mockMachine].sort((a,b) => a.size - b.size)

  return (
    <div className="App">
      <div className="container px-4 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedMachine?.map((items) => (
            <WashingMachine
              key={items.id}
              id={items.id}
              minutes={items.minutes}
              seconds={items.seconds}
              price={items.price}
              size={items.size}
              status={items.status}
            />
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
