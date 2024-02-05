import Button from "./Button";

const optionsMenu = [
  {
    id: 11,
    label: "Tutorial",
    path: "/tutorial",
  },
  {
    id: 12,
    label: "Ejercicios",
    path: "/exercises",
  },
];

const Menu = () => {
  return (
    <>
      <div className="flex flex-col gap-[35px] items-center">
        {optionsMenu.map(({ id, label, path }) => (
          <Button key={id} label={label} path={path} />
        ))}
      </div>
    </>
  );
};

export default Menu;
