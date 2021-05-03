import * as colors from "../../Styles/colors";
function Header() {
  return (
    <div className="container pl-0">
      <div className="row">
        <div className="col-8">
          <h1 id="titulo">Busca Bikonianos</h1>
          <p style={{ color: colors.redPrimary }}>
            (Lorem Ipsum is simply dummy text )
          </p>
          <p id="pHeader">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
            pretium tellus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
