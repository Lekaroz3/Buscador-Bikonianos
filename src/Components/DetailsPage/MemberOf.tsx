import { useEffect, useState } from "react";
import { Bikoniano } from "../../Interfaces/Interfaces";
import GridElement from "../GridElement";

function MemberOf(props: {
  typeToFind: string;
  bikoniano: Bikoniano;
  allBikonianos: Bikoniano[];
}) {
  const bikoniano: Bikoniano = props.bikoniano;
  const [miembros, setMiembros] = useState<Bikoniano[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (props.typeToFind === "equipo") {
      setMiembros(
        props.allBikonianos.filter(
          (bikon: Bikoniano) => bikon.Equipo === bikoniano.Equipo
        )
      );
      setTitle("Miembros de " + bikoniano.Equipo);
    } else {
      //TODO filtrado de habilidad cundo suban con mas datos el excel
      setMiembros(
        props.allBikonianos.filter(
          (bikon: Bikoniano) => bikon.Rol === bikoniano.Rol
        )
      );
      setTitle("Otros de " + bikoniano.Rol);
    }
  }, [bikoniano]);

  if (!miembros) {
    return (
      <div className="container">
        <h1>{title}</h1>
        <div className="row">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h3 className="mb-5">
        <b>{title}</b>
      </h3>
      <div className="row">
        {miembros.map((bikon, index) => {
          if (bikon === bikoniano) return;
          if (index >= 4) return;
          const ind = props.allBikonianos.indexOf(bikon);
          return (
            <GridElement
              bikoniano={bikon}
              allBikonianos={props.allBikonianos}
            ></GridElement>
          );
        })}
      </div>
    </div>
  );
}
export default MemberOf;
