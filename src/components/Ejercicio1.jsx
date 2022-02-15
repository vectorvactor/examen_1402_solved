import React from 'react';

class Ejercicio1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej1">
        <h2>Ejercicio 1</h2>
        <ul>
          <li>
           Sustituye el título del examen por componente llamado <b>Menu</b> que implemente una barra de navegación que permita cambiar 
           entre los distintos ejercicios como si de distintas páginas se tratase. Se ha de cumplir lo siguiente:
            <ul>
              <li>
                La barra de navegación implementa el componente de
                React-Bootstrap{' '}
                <a href="https://react-bootstrap.github.io/components/navbar/#offcanvas">
                  Offcanvas
                </a>{' '}
                <b> - 1 punto</b>
              </li>
              <li>
              El menú usará la variante de color de fondo y letras "light", se mostrará solamente 
              si el tamaño de la pantalla es menor que el tamaño grande de Bootstrap, el menú contextual 
              surgirá desde la parte izquierda y junto al título del examen se mostrará la imagen logo.png, 
              ubicada en /src/assets/images{' '}
              <b> - 0,75 puntos</b>
              </li>
              <li>
                Bajo el título del examen solamente se deberá mostrar el
                ejercicio seleccionado en el menú, y no será necesario recargar
                la página para navegar por los distintos ejercicios{' '}
                <b> - 0,75 puntos</b>
              </li>
              <li>
                Las opciones del menú se generarán de manera dinámica a partir
                de un objeto Javascript almacenado en un fichero con nombre{' '}
                <i>PaginasApp.js</i> ubicado en el directorio /src/data/
                <b> - 0,5 puntos</b>
              </li>
            </ul>
            Añade al proyecto las dependencias que consideres necesarias.
          </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio1;
