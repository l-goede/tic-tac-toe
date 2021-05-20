import React from 'react';

// Anstatt in der Funktion für Typescript nach props zu defineiren, machen wir einen tYp
// Und dann sagen das props von Typ squareProps

type SquareProps = {
  value: string;
  onClick: () => void;
};

function Square(props: SquareProps): JSX.Element {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
