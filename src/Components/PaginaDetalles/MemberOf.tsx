import { useContext, useEffect, useState } from "react";
import { TodosBikonianosContext } from "../../Contextos/TodosBikonianosContext";
import { Bikoniano } from "../../Interfaces/Interfaces";
import GridElement from "../GridElement";

function MemberOf(props: any) {
  const { todosBikonianos, posicionBikoniano } = useContext(
    TodosBikonianosContext
  );
  const bikoniano: Bikoniano = todosBikonianos[posicionBikoniano];
  const [miembros, setMiembros] = useState<Bikoniano[]>([]);
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (props.tipoABuscar === "equipo") {
      setMiembros(
        todosBikonianos.filter((bikon) => bikon.Equipo === bikoniano.Equipo)
      );
      setTitulo("Miembros de " + bikoniano.Equipo);
    } else {
      //TODO filtrado de habilidad cundo suban con mas datos el excel
      setMiembros(
        todosBikonianos.filter((bikon) => bikon.Rol === bikoniano.Rol)
      );
      setTitulo("Otros de " + bikoniano.Rol);
    }
  }, [bikoniano]);

  if (!miembros) {
    return (
      <div className="container">
        <h1>{titulo}</h1>
        <div className="row">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h3 className="mb-5">
        <b>{titulo}</b>
      </h3>
      <div className="row">
        {miembros.map((bikon, index) => {
          if (bikon === bikoniano) return;
          if (index >= 4) return;
          const ind = todosBikonianos.indexOf(bikon);
          return <GridElement bikoniano={bikon} index={ind}></GridElement>;
        })}
      </div>
    </div>
  );
}
export default MemberOf;
