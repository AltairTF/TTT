import { useState } from "react";

function Tabletop() {
  const [tabletop, setTabletop] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div>
        {tabletop.map((row) => (
          <div
            style={{
              heigth: "50px",
              width: "50px",
              backgroundColor: "red",
              border: "1px solid blue",
            }}
          >
            ALOU
          </div>
        ))}
      </div>
    </div>
  );
}

export { Tabletop };
