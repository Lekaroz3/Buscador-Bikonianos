import { createContext, FC, useState } from "react";
import { FiltroBusquedaContext } from "../Types/types";
const defaultValues: FiltroBusquedaContext = {
  textoBusqueda: "",
  setTextoBusqueda: () => {},
};
export const FiltroContext = createContext(defaultValues);
const dataBusqueda = "";

export const FiltroBusquedaProvider: FC = ({ children }) => {
  const [textoBusqueda, setTextoBusqueda] = useState(dataBusqueda);
  return (
    <FiltroContext.Provider value={{ textoBusqueda, setTextoBusqueda }}>
      {children}
    </FiltroContext.Provider>
  );
};
