import Searcher from "./Searcher";
import Header from "./Header";
import GridBikonianos from "./GridBikonianos";
import { useState } from "react";

function SearcherPage() {
  const [filterText, setFilterText] = useState("");
  return (
    <div id="divCentrado">
      <div className="container p-0 mx-0 ">
        <Header></Header>
        <Searcher text={filterText} setText={setFilterText}></Searcher>
        <GridBikonianos textFilter={filterText}></GridBikonianos>
      </div>
    </div>
  );
}

export default SearcherPage;
