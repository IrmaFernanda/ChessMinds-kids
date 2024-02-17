import { Routes, Route, Navigate } from "react-router";
import MainMenuPage from "./pages/MainMenuPage";
import LevelOneMenuPage from "./pages/LevelOneMenuPage";
import LevelTwoMenuPage from "./pages/LevelTwoMenuPage";
import LevelThreeMenuPage from "./pages/LevelThreeMenuPage";
import TutorialPage from "./pages/TutorialPage";
import MainMenu from "./pages/MainMenu";
import portada from "./assets/Portada.png";
import MenuExercise from "./components/MenuExercise";

function App() {
  return (
    <div className="w-full h-screen bg-gray-800">
      <Routes>
        <Route path="home" element={<MainMenuPage />} />
        <Route path="tutorial" element={<TutorialPage />} />
        <Route path="levelone" element={<LevelOneMenuPage />} />
        <Route path="leveltwo" element={<LevelTwoMenuPage />} />
        <Route path="levelthree" element={<LevelThreeMenuPage />} />
        <Route
          path="menuexercise"
          element={
            <MainMenu image={portada}>
              <MenuExercise />
            </MainMenu>
          }
        />
        <Route path="/*" element={<Navigate to="home" />} />
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
