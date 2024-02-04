import Button from "./Button";

const Menu = () => {
  return (
    <>
      <div className="flex flex-col gap-[25px]">
        <Button label="Jugar" />
        <Button label="Instrucciones" />
        <Button label="Créditos" />
        <Button label="Salir" />
      </div>
    </>
  );
};

export default Menu;
