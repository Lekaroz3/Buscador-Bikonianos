import "./App.css";
import Menu from "./Componentes/Menu/menu";
import PaginaBuscador from "./Componentes/PaginaBuscador/PaginaBuscador";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PaginaDetalles from "./Componentes/PaginaDetalles/PaginaDetalles";
import { TodosBikonianosProvider } from "./Contextos/TodosBikonianosContext";
import NotPageFound from "./Componentes/NotPageFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu></Menu>
        <header className="App-header">
          <TodosBikonianosProvider>
            <Switch>
              <Route exact path="/" component={PaginaBuscador}></Route>
              <Switch>
                <Route
                  exact
                  path="/bikoniano"
                  component={PaginaDetalles}
                ></Route>
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
