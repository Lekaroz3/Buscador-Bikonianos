import "./App.css";
import Menu from "./Components/Menu/menu";
import SearcherPage from "./Components/SearcherPage/SearcherPage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import NotPageFound from "./Components/NotPageFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu></Menu>
        <header className="App-header">
          <Switch>
            <Route
              exact
              path="/"
              component={() => <SearcherPage></SearcherPage>}
            ></Route>
            <Switch>
              <Route exact path="/bikoniano" component={DetailsPage}></Route>
              <Route path="/404" component={NotPageFound}></Route>
              <Redirect to="/404"></Redirect>
            </Switch>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
