import { Bikoniano } from "../Interfaces/Interfaces";

export type FiltroBusquedaContext = {
  textoBusqueda: string;
  setTextoBusqueda: (texto: string) => void;
};

export type BikonianoListContextStte = {
  todosBikonianos: Bikoniano[];
  posicionBikoniano: number;
  setTodosBikonianos: (bikonianos: Bikoniano[]) => void;
  setPosicionBikoniano: (index: number) => void;
};
