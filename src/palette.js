import React from "react";
import { AppContext } from "./AppContext";

export default function Palette() {
  const { setCurrColor, colores } = React.useContext(AppContext);

  const chooseColor = (e) => {
    setCurrColor(e.target.id);
  };

  return (
    <div className="paleta">
      {colores.map((object) => {
        return (
          <div
            key={object.color}
            onClick={chooseColor}
            id={object.color}
            className={"color " + object.color}
          />
        );
      })}
    </div>
  );
}
