import React from 'react';
import uuid from 'react-uuid';
import { Col, Form } from 'react-bootstrap';
import { BASE_API_URL } from '../data/Constants';

class SelectMarcas extends React.Component {
  constructor(props) {
    super(props);
    this.reference = props.reference;
    this.brands = [];
  }

  async componentDidMount() {
    const responseBrands = await fetch(BASE_API_URL + 'brands');
    const responseDataBrands = await responseBrands.json();
    this.brands = responseDataBrands.data;
  }
  render() {
    console.log('select renderizado');
    return (
      <Form.Group as={Col}>
        <Form.Label>Marca</Form.Label>
        <Form.Select ref={this.reference}>
          {this.brands.map((item) => {
            return (
              <option key={uuid()} value={item.brand_slug}>
                {item.brand_name}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    );
  }
}

export default SelectMarcas;
