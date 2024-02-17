import Button from "./Button";

const optionsMenuExercise = [
  {
    id: 21,
    label: "NIVEL 1",
    path: "/levelone",
  },
  {
    id: 22,
    label: "NIVEL 2",
    path: "/leveltwo",
  },
  {
    id: 23,
    label: "NIVEL 3",
    path: "/levelthree",
  },
];

const MenuExercise = () => {
  return (
    <>
      <div className="flex flex-col gap-[35px] items-center">
        {optionsMenuExercise.map(({ id, label, path }) => (
          <Button key={id} label={label} path={path} />
        ))}
      </div>
    </>
  );
};

export default MenuExercise;

