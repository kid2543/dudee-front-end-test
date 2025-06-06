import "./App.css";
import WashingMachine from "./components/WashingMachine";
import { mockMachine } from "./mocks/mockMachine";

function App() {
  return (
    <div className="App">
      <div className="container px-4 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockMachine?.map((items) => (
          <WashingMachine key={items.id} id={items.id} minutes={items.minutes} seconds={items.seconds} price={items.price} size={items.size} status={items.status} />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
