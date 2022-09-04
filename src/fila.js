import React from "react";
import { AppContext } from "./AppContext";

export default function Fila(props) {
  const { currColor, columns } = React.useContext(AppContext);
  const { row } = props;

  const handleClick = (e) => {
    document.getElementById(e.target.id).style.backgroundColor = currColor;
  };

  const handleMove = (e) => {
    if (e.buttons === 1) {
      return (document.getElementById(
        e.target.id
      ).style.backgroundColor = currColor);
    }
  };

  return (
    <div className="fila-container">
      {columns.map((object) => {
        return (
          <div
            key={object.id}
            onClick={handleClick}
            onMouseMove={handleMove}
            id={object.id + row}
            className="cubo"
          />
        );
      })}
    </div>
  );
}
