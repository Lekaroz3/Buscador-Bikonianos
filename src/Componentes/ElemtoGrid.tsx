import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodosBikonianosContext } from "../Contextos/TodosBikonianosContext";

function ElementoGrid(props: any) {
  const { setPosicionBikoniano } = useContext(TodosBikonianosContext);

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <Link
        onClick={() => {
          setPosicionBikoniano(props.index);
        }}
        to={"/bikoniano"}
      >
        <div className="contenedor">
          <img
            src="https://s3-alpha-sig.figma.com/img/9a62/8741/294c32ae95de162da018b102baf4a82e?Expires=1620604800&Signature=V0dLb9gdZZrA8Vc6O-EvvaZqIS5T30VJiD-8fGmuDbXX1c1grskb7qdggJGcbVB6iybyEwkIWJmYVkBi2RoTA4~8eyRYwr179gU6GvJnEWyycUBMmHzeibTIwK7sAaCYRSXB9LAUov~Hl5mkW6G8b7Yk--YGTg9KMc8Oq5e7uvmQo-3WqN53tmKxi522cVc44tdwzPWTqd1gjynbcgil1CPBMUvLGXrfPWeW6oI7VgkGSTJBp7z2zi7HCrpCC8JorwdwWOx13~Pgyaz~Kc1QqCDWm-yhIZPtVTpQv2khoEfGBjB6ZtAZr~FKDwLhamiuPJqaJ6awxFVwKpO3yRDFqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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

export default ElementoGrid;
