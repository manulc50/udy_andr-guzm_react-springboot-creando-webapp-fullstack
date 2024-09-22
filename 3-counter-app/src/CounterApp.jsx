import { Fragment, useState } from "react";

const CounterApp = ({ valor }) => {
  const [ contador, setContador ] = useState(valor);

  const incrementarContador = () => setContador(contador + 1);

  return (
    <Fragment>
      <h2>El valor del contador es { contador }</h2>
      { /* Versión simplificada de la expresión "() => incrementarContador()" */ }
      <button onClick={ incrementarContador }>Incrementar contador +1</button>
    </Fragment>
  );
};

export default CounterApp;
