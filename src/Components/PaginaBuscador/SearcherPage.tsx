import { FiltroBusquedaProvider } from "../../Contextos/FiltroBusquedaContext";
import Searcher from "./Searcher";
import Header from "./Header";
import GridBikonianos from "./GridBikonianos";
import { useEffect, useState } from "react";

function SearcherPage() {
  // const [filterText, setFilterText] = useState("");
  return (
    <div className="container p-0 ">
      <FiltroBusquedaProvider>
        <Header></Header>
        <Searcher /*text={filterText} setText={setFilterText}*/></Searcher>
        <GridBikonianos></GridBikonianos>
      </FiltroBusquedaProvider>
    </div>
  );
}

export default SearcherPage;
