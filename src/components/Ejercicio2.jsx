import React from 'react';
import PaginaMoviles from './PaginaMoviles';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej2">
        <h2>Ejercicio 2</h2>
        <ul>
          <li>
            Utiliza la API REST de{' '}
            <a href="https://github.com/azharimm/phone-specs-api">
              Phone Specifications API
            </a>{' '}
            para rellenar una tabla con datos de teléfonos mediante un
            formulario. Ten en cuenta las siguientes indicaciones:
          </li>
          <li>
            El formulario será un componente que a su vez estará formado por dos
            componentes <b>(1 punto)</b>:
          </li>
          <ul>
            <li>
              Lista desplegable con marcas de teléfono, la cual se ha de
              rellenar llamando a la API (List Brands)
            </li>
            <li>
              Botón de búsqueda, que rellenará la tabla llamando a la API (List
              Phones) con el parámetro indicado en la lista desplegable
            </li>
          </ul>
          <li>
            La tabla tendrá los campos Marca y Modelo, y al cargar la página se
            rellenará con los datos de los últimos modelos (Top by Fans)
            <b> - 1,5 puntos</b>
          </li>
          <li>
            Al hacer click sobre una fila de la tabla, se mostrará en un
            elemento de tipo{' '}
            <a href="https://react-bootstrap.github.io/components/cards/">
              Card
            </a>{' '}
            de React-Bootstrap con el detalle del modelo en concreto, con los
            siguientes campos separados al estilo "Kitchen Sink"
            <b> (1,5 puntos)</b>:
            <ul>
              <li>Imagen</li>
              <li>Marca - Modelo</li>
              <li>Sistema operativo</li>
              <li>Dimensión</li>
              <li>Almacenamiento</li>
            </ul>
            Salvo la imagen, para recuperar el resto de elementos tenéis que
            llamar a la API (Phone Specifications) usando el campo <i>detail</i>{' '}
            o <i>slug</i>
            de las consultas de listado de elementos
          </li>
          <li>
            Añade un botón al Card que permita añadir un teléfono a una lista de
            favoritos, de modo que almacene su información en localStorage al ir
            a otra página<b> - 1 punto</b>
          </li>
        </ul>

        <PaginaMoviles />
      </div>
    );
  }
}

export default Ejercicio2;
