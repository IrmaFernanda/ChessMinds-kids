import Menu from "../components/Menu";
import image from "../assets/chess3.png";

const MainMenu = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex w-full h-full bg-blue-800">
          <div className="w-full h-full flex items-center justify-center">
            <img src={image} alt="logo" />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
