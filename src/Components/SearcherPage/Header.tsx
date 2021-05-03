import * as colors from "../../Styles/colors";
function Header() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          <h1 id="titulo">Busca Bikonianos</h1>
          <p style={{ color: colors.redPrimary }}>
            (Lorem Ipsum is simply dummy text )
          </p>
          <p className="lh-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
