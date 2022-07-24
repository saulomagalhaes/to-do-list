import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { TaksCreatedAndCompleted } from "./components/TaksCreatedAndCompleted";
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <CreateTask />
      <TaksCreatedAndCompleted />
      <ListTasks />
    </div>
  );
}

export default App;
