import Button from "./Button";

const optionsMenu = [
  {
    id: 11,
    label: "TUTORIAL DE PIEZAS",
    path: "/tutorial",
  },
  {
    id: 12,
    label: "TEMAS TACTICOS",
    path: "/menuexercise",
  },
  {
    id: 13,
    label: "EJERCICIOS",
    path: "/menuexercise",
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
