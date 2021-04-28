import { FiltroBusquedaProvider } from "../../Contextos/FiltroBusquedaContext";
import Buscador from "./Buscador";
import Cabecera from "./Cabecera";
import GridBikonianos from "./GridBikonianos";

function PaginaBuscador() {
  return (
    <div className="container p-0 ">
      <FiltroBusquedaProvider>
        <Cabecera></Cabecera>
        <Buscador></Buscador>
        <GridBikonianos></GridBikonianos>
      </FiltroBusquedaProvider>
    </div>
  );
}

export default PaginaBuscador;
