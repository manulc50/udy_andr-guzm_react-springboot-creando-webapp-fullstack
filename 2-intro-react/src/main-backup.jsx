import React from 'react';
import ReactDOM from 'react-dom/client';

// Algunas formas de crear elementos de React
const H1 = React.createElement('h1', null, 'Hola Mundo');
//const Li = React.createElement('li', null, 'Item 1');
//const Ul = React.createElement('ul', null, Li);
// Esta forma es la recomendada y utiliza por debajo de forma automática el método "createElement" de React para crear los elementos
const Ul = <ul><li>Item 1</li></ul>;
const Div = React.createElement('div', null, H1, Ul);

ReactDOM.createRoot(document.getElementById('root')).render(Div);
