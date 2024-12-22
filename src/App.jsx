import {Header} from "./Components/Header";
import style from "./App.module.css";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>dsdasda</main>
      </div>
    </div>
  );
}

export default App;
