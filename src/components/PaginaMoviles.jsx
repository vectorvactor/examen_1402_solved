import React from 'react';
import uuid from 'react-uuid';
import {
  Card,
  Container,
  Table,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import FormMarcas from './FormMarcas';
import Boton from './Boton';
import { BASE_API_URL } from '../data/Constants';
import './table.css';

class PaginaMoviles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
    this.favouritesList = [];
    this.brandInput = React.createRef();
    this.changeSelected = this.changeSelected.bind(this);
    this.updateTable = this.updateTable.bind(this);
    this.updateTableAPI = this.updateTableAPI.bind(this);
    this.addFavourites = this.addFavourites.bind(this);
  }

  changeSelected = async (itemEndpoint) => {
    const response = await fetch(BASE_API_URL + itemEndpoint);
    const responseData = await response.json();
    this.setState({
      selectedItem: responseData.data,
    });
  };

  updateTable = async () => {
    this.updateTableAPI('brands/' + this.brandInput.current.value);
  };

  updateTableAPI = async (endpointURL) => {
    const response = await fetch(BASE_API_URL + endpointURL);
    const responseData = await response.json();
    const parsedData = responseData.data.phones.map((item) => {
      const fila = {
        brand:
          item.brand !== undefined ? item.brand : item.phone_name.split(' ')[0],
        phone_name: item.phone_name,
        slug: item.slug,
      };
      return fila;
    });
    this.setState({
      tableData: parsedData,
    });
    this.changeSelected(parsedData[0].slug);
  };

  addFavourites = () => {
    let index = this.favouritesList.findIndex(
      (item) => item.phone_name == this.state.selectedItem.phone_name
    );

    index === -1
      ? this.favouritesList.push(this.state.selectedItem)
      : console.log('Ya está en favoritos');
  };

  async componentDidMount() {
    let favourites = JSON.parse(localStorage.getItem('favourites'));
    console.log('Favoritos:' + favourites);
    this.favouritesList =
      favourites !== null && favourites !== undefined && favourites !== ''
        ? favourites
        : [];
    this.updateTableAPI('top-by-fans');
  }

  componentWillUnmount() {
    localStorage.setItem('favourites', JSON.stringify(this.favouritesList));
  }

  render() {
    return (
      <div className="main-site">
        <h1>Smartphones</h1>
        <Container>
          <Row>
            <FormMarcas
              reference={this.brandInput}
              onClickForm={this.updateTable}
            />
          </Row>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item.slug)}
                      >
                        <td>{item.brand}</td>
                        <td>{item.phone_name}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={this.state.selectedItem.thumbnail}
                />
                <Card.Body>
                  <Card.Title>
                    {this.state.selectedItem.brand}{' '}
                    {this.state.selectedItem.phone_name}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Almacenamiento: {this.state.selectedItem.storage}
                  </ListGroupItem>
                  <ListGroupItem>
                    Dimensiones: {this.state.selectedItem.dimension}
                  </ListGroupItem>
                  <ListGroupItem>
                    SO: {this.state.selectedItem.os}
                  </ListGroupItem>
                  <ListGroupItem>
                    <Boton
                      text="Añadir a favoritos"
                      onClickButton={this.addFavourites}
                    />
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PaginaMoviles;
