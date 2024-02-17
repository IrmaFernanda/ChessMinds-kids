import MenuExercise from "../components/MenuExercise";
import image from "../assets/Portada.png";

const MenuExercisePage = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex w-full h-full bg-gray-800">
          <div className="w-full h-full flex items-center justify-center">
            <img src={image} alt="logo" />
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <MenuExercise />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuExercisePage;
