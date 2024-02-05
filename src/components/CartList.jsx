import ButtonGame from "./ButtonGame";
import TextBox from "./Text";

const infoCards = [
  {
    id: 101,
    title: "Mates en 1",
    description: "Un movimiento que pone al rey adversario en jaque mate de inmediato."
  },
  {
    id: 102,
    title: "Mates en 2",
    description: "Dos movimientos consecutivos que conducen al jaque mate."
  },
  {
    id: 103,
    title: "Clavada",
    description: "Un jaque que fuerza al oponente a mover una pieza, exponiendo una más valiosa detrás de ella."
  },
  {
    id: 104,
    title: "Eliminación de la defensa",
    description: "Capturar una pieza clave que defiende a otra,debilitando la posición defensica del oponente."
  },
  {
    id: 105,
    title: "Combinacion de tablas",
    description: "Estratejias para forzar un empate en situaciones tácticas, como la repetición de movimientos o la falta de material para realizar un jaque mate."
  },
  {
    id: 106,
    title: "Ataque doble",
    description: "Un movimiento que amenaza dos piezas simultáneamente, forzando al oponente a elegir cual defender."
  }
]

const CardsList = () => {
  return (
      <div className="grid grid-cols-2 gap-4">
        {
          infoCards.map(({ id, title, description}) => (
            <ButtonGame key={id} label={title} description={description} />
          ))
        }
      </div>
  );
};

export default CardsList;