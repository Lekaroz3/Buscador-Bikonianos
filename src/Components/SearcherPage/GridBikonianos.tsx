import data from "../../Data/data.json";
import { useEffect, useState } from "react";
import { Bikoniano } from "../../Interfaces/Interfaces";
import GridElement from "../GridElement";

function GridBikonianos(props: { textFilter: string }) {
  const [allBikonianos, setAllBikonianos] = useState<Bikoniano[]>([]);
  const [bikonianosFilters, setBikonianosFilters] = useState<Bikoniano[]>([]);

  useEffect(() => {
    setAllBikonianos(
      data.map((bikoniano) => {
        const bikonianoTemp: Bikoniano = {
          Nombre: bikoniano.Nombre,
          Apellidos: bikoniano.Apellidos,
          Equipo: bikoniano.Equipo,
          Rol: typeof bikoniano.Rol === "undefined" ? "" : bikoniano.Rol,
          "Fecha incorporación a Biko":
            typeof bikoniano["Fecha incorporación a Biko"] === "undefined"
              ? ""
              : bikoniano["Fecha incorporación a Biko"],
        };
        return bikonianoTemp;
      })
    );
  }, []);

  useEffect(() => {
    setBikonianosFilters(
      allBikonianos.filter((bikoniano: Bikoniano) =>
        bikoniano.Nombre.toLowerCase().includes(props.textFilter.toLowerCase())
      )
    );
  }, [props.textFilter, allBikonianos]);

  if (!bikonianosFilters) {
    return <div>Loading....</div>;
  }
  if (bikonianosFilters.length === 0) {
    return <div>No se han encontrado Bikonianos...</div>;
  }

  return (
    <div className="container p-0">
      <div className="row">
        {bikonianosFilters.map((bikoniano) => {
          return (
            <GridElement
              bikoniano={bikoniano}
              allBikonianos={allBikonianos}
            ></GridElement>
          );
        })}
      </div>
    </div>
  );
}

export default GridBikonianos;
