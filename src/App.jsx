import { Routes, Route } from "react-router";
import MainMenu from "./pages/MainMenu";
import PlayMenu from "./pages/PlayMenu";
import Board from "./components/Board";

function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="home" element={<MainMenu/>}/>
        <Route path="tutorial" element={<Board/>}/>
        <Route path="exercises" element={<PlayMenu/>}/>
      </Routes>
    </div>
  );
}

export default App;
{/* <div className="w-full h-screen">
      <MainMenu />
    </div> */}