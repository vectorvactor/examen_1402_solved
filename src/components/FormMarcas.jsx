import React from 'react';

import { Row, Form } from 'react-bootstrap';

import SelectMarcas from './SelectMarcas';
import Boton from './Boton';

class FormMarcas extends React.Component {
  constructor(props) {
    super(props);
    this.reference = props.reference;
    this.onClickForm = props.onClickForm;
  }

  render() {
    return (
      <Form>
        <Row className="mb-2">
          <SelectMarcas reference={this.reference} />
        </Row>
        <Boton text="Actualizar" onClickButton={this.onClickForm} />
      </Form>
    );
  }
}
export default FormMarcas;
