import CartList from "../components/CartList";
import Button from "../components/Button";

const PlayMenuPage = () => {
  return (
    <>
      <div className="h-screen bg-blue-400 flex flex-col items-center justify-center gap-6">
        <CartList />
        <div className="flex w-full justify-center">
          <Button label="REGRESAR" path="/home" />
        </div>
      </div>
    </>
  );
};

export default PlayMenuPage;