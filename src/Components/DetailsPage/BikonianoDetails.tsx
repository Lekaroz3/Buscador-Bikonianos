import * as colors from "../../Styles/colors";

function BikonianoDetails(props: any) {
  const bikoniano = props.bikoniano;
  const entryYear: string = bikoniano["Fecha incorporación a Biko"]
    ? bikoniano["Fecha incorporación a Biko"].toString().split("/")[2]
    : "No Year";
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-12 mb-5 pl-0">
          <img
            src="https://s3-alpha-sig.figma.com/img/9eb2/3b96/f3c81e519af3902aa192789993d1b3b1?Expires=1620604800&Signature=CdcOnFDp0YZWqN4wnI9rj4~gRjpbNcBH~OPt-J9Wa0Mo0rHzEXX3N98h-L5zzp0WlkwB-pZKlA0hffgxvc9OCrbrrjr-Ga-CLNawuag3NSqS6jONqEQ357zI9plMQKKSN1FKHXOWeUL50nVhlhtiw0R3MUtOfECn8fKQ-nBI9obhWh1tZI73t9warpyV-AjposDGXQf0~PykII9RHeTO4rzos7iWsQOepZDo-pAobI2itVUlev~Ivn2hrGb85WlRx-e05vjGhQ-ChZCv6SPNQfGiCqPWeSYv1PG83XptpQtS8E1M9w5CZqfweUzdN5UbYc3ox8Y208g~6vtIQ9XL~A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            className="img-fluid"
            alt={bikoniano.Nombre}
            width="729.57px"
            height="711.28px"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-12 mb-4  pl-5 ">
          <h1 className="mt-4">{bikoniano.Nombre}</h1>
          <h1>
            <b>{bikoniano.Apellidos}</b>
          </h1>
          <p style={{ color: colors.redPrimary }}>{bikoniano.Rol}</p>
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
            Desde <b>{entryYear}</b>
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
export default BikonianoDetails;
