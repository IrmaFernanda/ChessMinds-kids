import CartList from "../components/CartList";
import image from "../assets/chess3.png";
import Button from "../components/Button";

const PlayMenu = () => {
  return (
    <>
      <div className="h-screen bg-gray-800 flex flex-col items-center justify-center gap-3 ">
          <CartList/>
          <div className="flex w-full justify-center">
            <Button label="Regresar" path="/home"/>
          </div>
      </div>
    </>
  );
};

export default PlayMenu;