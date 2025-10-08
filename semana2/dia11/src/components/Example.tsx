import { useToggle } from "@hooks/UseToggle";


const Example = () => {

  // desestructuracion de [value, toggle] en useToggle
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Cerrar" : "Abrir"}
      </button>
    </div>
  );
};
export default Example