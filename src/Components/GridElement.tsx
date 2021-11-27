import { memo } from "react";
import { Link } from "react-router-dom";
import { Bikoniano } from "../Interfaces/Interfaces";

function GridElement(props: {
  bikoniano: Bikoniano;
  allBikonianos: Bikoniano[];
}) {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <Link
        to={{
          pathname: "/bikoniano",
          state: {
            bikoniano: props.bikoniano,
            allBikonianos: props.allBikonianos,
          },
        }}
      >
        <div className="contenedor">
          <img
            src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"
            className="image"
            alt=""
            width="272.45px"
            height="265.6px"
          />
          <div className="overlay">
            <div className="text">
              <h5 className="text-capitalize">
                <b>{props.bikoniano.Nombre.toLowerCase()}</b>
              </h5>
              <h5 className="text-capitalize">
                <b>{props.bikoniano.Apellidos.split(" ")[0].toLowerCase()}</b>
              </h5>
              <p id="rolGrid">{props.bikoniano.Rol}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default memo(GridElement);
