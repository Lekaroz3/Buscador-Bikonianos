import BikonianoDetails from "./BikonianoDetails";
import Arrow from "./Arrow";
import MemberOf from "./MemberOf";

function DetailsPage(props: any) {
  return (
    <div>
      <BikonianoDetails
        bikoniano={props.location.state.bikoniano}
      ></BikonianoDetails>
      <div className="container">
        <MemberOf
          typeToFind={"equipo"}
          bikoniano={props.location.state.bikoniano}
          allBikonianos={props.location.state.allBikonianos}
        ></MemberOf>
        <Arrow></Arrow>
        <MemberOf
          typeToFind={"rol"}
          bikoniano={props.location.state.bikoniano}
          allBikonianos={props.location.state.allBikonianos}
        ></MemberOf>
      </div>
    </div>
  );
}
export default DetailsPage;
