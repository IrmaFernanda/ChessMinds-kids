import { Routes, Route } from "react-router";
import MainMenu from "./pages/MainMenu";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="home" element={<MainMenu/>}/>
      </Routes>

    </div>
  );
}

export default App;
{/* <div className="w-full h-screen">
      <MainMenu />
    </div> */}