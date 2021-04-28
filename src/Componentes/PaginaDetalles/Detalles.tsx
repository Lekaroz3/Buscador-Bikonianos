import { useContext } from "react";
import { TodosBikonianosContext } from "../../Contextos/TodosBikonianosContext";
import * as colors from "../../Styles/colors";

function DetallesBikoniano() {
  const { todosBikonianos, posicionBikoniano } = useContext(
    TodosBikonianosContext
  );
  const bikoniano = todosBikonianos[posicionBikoniano];
  const anoIncorporacion: string = bikoniano["Fecha incorporación a Biko"]
    ? bikoniano["Fecha incorporación a Biko"].toString().split("/")[2]
    : "No Year";
  return (
    <div className="container-fluid">
      {/* <Link to="/" className="float-right">
        <img src={logo} alt="Logo" width="120px" height="43.3px" />
      </Link> */}

      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 mb-5">
          <img
            src="https://los40es00.epimg.net/los40/imagenes/2020/08/10/cinetv/1597052600_721073_1597052703_noticia_normal.jpg"
            className="img-fluid"
            alt={bikoniano.Nombre}
          />
        </div>
        <div className="col-lg-6 col-md-6 col-12 mb-4">
          <h1 className="mt-4">{bikoniano.Nombre}</h1>
          <h1>
            <b>{bikoniano.Apellidos}</b>
          </h1>
          <p style={{ color: colors.rojoPrincipal }}>{bikoniano.Rol}</p>
          <p>
            <span className="mr-3">
              <img
                className="mb-1"
                src="https://img.icons8.com/ios/50/000000/rocket.png"
                alt="Cohete"
                width="20"
                height="20"
              />
            </span>
            <b>{bikoniano.Equipo}</b>
            <span className="ml-3 mr-3">
              <img
                className="mb-1"
                src="https://img.icons8.com/material-outlined/24/000000/calendar--v1.png"
                alt="Calendario"
                width="20"
                height="20"
              />
            </span>
            Desde <b>{anoIncorporacion}</b>
          </p>
          <p>
            <span className="badge rounded-pill mr-2 bolsaHabilidad">
              react
            </span>
            <span className="badge rounded-pill bolsaHabilidad">Nube</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            pretium tellus. Nulla vitae orci egestas neque elementum imperdiet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            pretium tellus. Nulla vitae orci egestas neque elementum imperdiet.
          </p>
        </div>
      </div>
    </div>
  );
}
export default DetallesBikoniano;
