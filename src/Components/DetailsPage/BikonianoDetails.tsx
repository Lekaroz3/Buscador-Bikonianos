import * as colors from "../../Styles/colors";

function BikonianoDetails(props: any) {
  const bikoniano = props.bikoniano;
  const entryYear: string = bikoniano["Fecha incorporación a Biko"]
    ? bikoniano["Fecha incorporación a Biko"].toString().split("/")[2]
    : "No Year";
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-12 mb-5 pl-0">
          <img
            src="https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"
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
