import { Routes, Route, Navigate } from "react-router";
import MainMenuPage from "./pages/MainMenuPage";
import PlayMenuPage from "./pages/PlayMenuPage";
import Board from "./components/Board";

function App() {
  return (
    <div className="w-full h-screen bg-gray-800">
      <Routes>
        <Route path="home" element={<MainMenuPage />} />
        <Route path="tutorial" element={<Board />} />
        <Route path="exercises" element={<PlayMenuPage />} />
        <Route path="/*" element={<Navigate to="home"/>}/>
      </Routes>
    </div>
  );
}

export default App;
{
  /* <div className="w-full h-screen">
      <MainMenu />
    </div> */
}

