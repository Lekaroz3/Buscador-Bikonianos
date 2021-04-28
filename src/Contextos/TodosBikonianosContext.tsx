import { createContext, FC, useState } from "react";
import { Bikoniano } from "../Interfaces/Interfaces";
import { BikonianoListContextStte } from "../Types/types";

const bikonianoInicial: Bikoniano = {
  Nombre: "",
  Apellidos: "",
  Equipo: "",
  Rol: "",
  "Fecha incorporación a Biko": new Date(2000, 5, 14),
};
const defaultValues: BikonianoListContextStte = {
  todosBikonianos: [bikonianoInicial],
  posicionBikoniano: 0,
  setTodosBikonianos: () => {},
  setPosicionBikoniano: () => {},
};
export const TodosBikonianosContext = createContext(defaultValues);

export const TodosBikonianosProvider: FC = ({ children }) => {
  const [todosBikonianos, setTodosBikonianos] = useState<Bikoniano[]>([
    bikonianoInicial,
  ]);
  const [posicionBikoniano, setPosicionBikoniano] = useState(0);
  return (
    <TodosBikonianosContext.Provider
      value={{
        todosBikonianos,
        posicionBikoniano,
        setTodosBikonianos,
        setPosicionBikoniano,
      }}
    >
      {children}
    </TodosBikonianosContext.Provider>
  );
};
