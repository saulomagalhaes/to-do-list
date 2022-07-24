import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaksCreatedAndCompleted } from "./components/TaksCreatedAndCompleted";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <CreateTask />
      <TaksCreatedAndCompleted />
    </div>
  );
}

export default App;
