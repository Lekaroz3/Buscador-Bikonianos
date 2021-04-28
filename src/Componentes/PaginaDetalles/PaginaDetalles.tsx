import DetallesBikoniano from "./Detalles";
import Flecha from "./Flecha";
import MiembrosReact from "./MiembrosReact";

function PaginaDetalles() {
  return (
    <div>
      <DetallesBikoniano></DetallesBikoniano>
      <div className="container">
        <MiembrosReact tipoABuscar={"equipo"}></MiembrosReact>
        <Flecha></Flecha>
        <MiembrosReact tipoABuscar={"rol"}></MiembrosReact>
      </div>
    </div>
  );
}
export default PaginaDetalles;
