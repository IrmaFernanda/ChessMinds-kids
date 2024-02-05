import Menu from "../components/Menu";
import image from "../assets/logo.png";

const MainMenuPage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-[1280px] h-full flex items-center justify-center">
          <div className="w-full flex justify-center">
            <img src={image} alt="logo" className="h-full" />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenuPage;
