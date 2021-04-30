import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FiltroContext } from "../../Contextos/FiltroBusquedaContext";
import { TodosBikonianosContext } from "../../Contextos/TodosBikonianosContext";
import { Bikoniano } from "../../Interfaces/Interfaces";
import { GetAllBikonianos } from "../../Services/services";
import GridElement from "../GridElement";

function GridBikonianos() {
  const { textoBusqueda } = useContext(FiltroContext);
  const { todosBikonianos, setTodosBikonianos } = useContext(
    TodosBikonianosContext
  );
  const [bikonianosFiltrados, setBikonianosFiltrados] = useState<Bikoniano[]>(
    []
  );

  useEffect(() => {
    const data = GetAllBikonianos();
    data
      .then((result) => {
        setTodosBikonianos(result);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setBikonianosFiltrados(
      todosBikonianos.filter((bikoniano) =>
        bikoniano.Nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
      )
    );
  }, [textoBusqueda, todosBikonianos]);

  if (!bikonianosFiltrados) {
    return <div>Loading....</div>;
  }
  if (bikonianosFiltrados.length === 0) {
    return <div>No se han encontrado Bikonianos...</div>;
  }

  return (
    <div className="container p-0">
      <div className="row">
        {bikonianosFiltrados.map((bikoniano, index) => {
          return (
            <GridElement bikoniano={bikoniano} index={index}></GridElement>
          );
        })}
      </div>
    </div>
  );
}

export default GridBikonianos;
