import BikonianoDetails from "./Details";
import Arrow from "./Arrow";
import MemberOf from "./MemberOf";

function DetailsPage() {
  return (
    <div>
      <BikonianoDetails></BikonianoDetails>
      <div className="container">
        <MemberOf tipoABuscar={"equipo"}></MemberOf>
        <Arrow></Arrow>
        <MemberOf tipoABuscar={"rol"}></MemberOf>
      </div>
    </div>
  );
}
export default DetailsPage;
