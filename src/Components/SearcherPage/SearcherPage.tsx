import Searcher from "./Searcher";
import Header from "./Header";
import GridBikonianos from "./GridBikonianos";
import { useState } from "react";

function SearcherPage() {
  const [filterText, setFilterText] = useState("");
  return (
    <div className="container p-0 ">
      <Header></Header>
      <Searcher text={filterText} setText={setFilterText}></Searcher>
      <GridBikonianos textFilter={filterText}></GridBikonianos>
    </div>
  );
}

export default SearcherPage;
