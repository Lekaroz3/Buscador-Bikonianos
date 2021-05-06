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
            src="https://s3-alpha-sig.figma.com/img/9eb2/3b96/f3c81e519af3902aa192789993d1b3b1?Expires=1620604800&Signature=CdcOnFDp0YZWqN4wnI9rj4~gRjpbNcBH~OPt-J9Wa0Mo0rHzEXX3N98h-L5zzp0WlkwB-pZKlA0hffgxvc9OCrbrrjr-Ga-CLNawuag3NSqS6jONqEQ357zI9plMQKKSN1FKHXOWeUL50nVhlhtiw0R3MUtOfECn8fKQ-nBI9obhWh1tZI73t9warpyV-AjposDGXQf0~PykII9RHeTO4rzos7iWsQOepZDo-pAobI2itVUlev~Ivn2hrGb85WlRx-e05vjGhQ-ChZCv6SPNQfGiCqPWeSYv1PG83XptpQtS8E1M9w5CZqfweUzdN5UbYc3ox8Y208g~6vtIQ9XL~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
