import "./App.css";
import Menu from "./Components/Menu/menu";
import SearcherPage from "./Components/PaginaBuscador/SearcherPage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DetailsPage from "./Components/PaginaDetalles/DetailsPage";
import { TodosBikonianosProvider } from "./Contextos/TodosBikonianosContext";
import NotPageFound from "./Components/NotPageFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu></Menu>
        <header className="App-header">
          <TodosBikonianosProvider>
            <Switch>
              <Route exact path="/" component={SearcherPage}></Route>
              <Switch>
                <Route exact path="/bikoniano" component={DetailsPage}></Route>
                <Route path="/404" component={NotPageFound}></Route>
                <Redirect to="/404"></Redirect>
              </Switch>
            </Switch>
          </TodosBikonianosProvider>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
