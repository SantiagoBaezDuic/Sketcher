import React from "react";
import "./styles.css";
import Fila from "./fila";
import Palette from "./palette";
import { AppContext } from "./AppContext";

export default function App() {
  const { currColor, rows } = React.useContext(AppContext);

  const clearTable = () => {
    const casillas = document.getElementsByClassName("cubo");
    const casillasArray = Object.values(casillas);
    const clearCasillas = () => {
      casillasArray.forEach((object) => {
        object.style.backgroundColor = "white";
      });
    };
    clearCasillas();
  };

  const translate = () => {
    if (currColor === "red") {
      return "Rojo";
    } else if (currColor === "orange") {
      return "Naranja";
    } else if (currColor === "yellow") {
      return "Amarillo";
    } else if (currColor === "green") {
      return "Verde";
    } else if (currColor === "cyan") {
      return "Celeste";
    } else if (currColor === "blue") {
      return "Azul";
    } else if (currColor === "purple") {
      return "Violeta";
    } else if (currColor === "grey") {
      return "Gris";
    } else if (currColor === "black") {
      return "Negro";
    } else if (currColor === "brown") {
      return "Marrón";
    } else {
      return "Blanco";
    }
  };

  const traducido = translate();

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="title">Sketcher</h1>
        <Palette />
        <div className="grid-container">
          {rows.map((object) => {
            return <Fila key={object.id} row={object.id} />;
          })}
        </div>
        <div className="footer">
          <div className="currcolor-container">
            <h3>Color seleccionado:</h3>
            <div className="currcolor-cubecontainer">
              <h3 style={{ color: currColor }}>{traducido}</h3>
              <div className="cubo-estatico" style={{ backgroundColor: currColor}}></div>
            </div>
          </div>
          <div className="clear-container">
            <h4>Limpiar</h4>
            <div onClick={clearTable} className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
