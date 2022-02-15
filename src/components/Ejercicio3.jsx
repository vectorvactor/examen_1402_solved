import React from 'react';
import PaginaFavoritos from './PaginaFavoritos';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej3">
        <h2>Ejercicio 3</h2>
        <ul>
          <li>
            Muestra los nombres de los teléfonos almacenados en la lista de
            favoritos como una unordered list<b> - 0,75 puntos</b>
          </li>
          <li>
            Haz lo mismo que en el apartado anterior, salvo que ahora has de
            rellenar una Card para cada teléfono con los mismos datos que en el
            ejercicio 2, pero en este caso el botón sirve para eliminar el
            teléfono de la lista de favoritos<b> - 1,25 puntos</b>
          </li>
        </ul>
        <PaginaFavoritos />
      </div>
    );
  }
}

export default Ejercicio3;
