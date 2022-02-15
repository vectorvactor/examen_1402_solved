import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import Boton from './Boton';

class CardMovil extends React.Component {
  constructor(props) {
    super(props);
    this.buttonText = props.buttonText;
    this.onClickCard = props.onClickCard;
    console.log(props.cardItem);
  }

  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.cardItem.thumbnail} />
        <Card.Body>
          <Card.Title>
            {this.props.cardItem.brand} {this.props.cardItem.phone_name}
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Almacenamiento: {this.props.cardItem.storage}
          </ListGroupItem>
          <ListGroupItem>
            Dimensiones: {this.props.cardItem.dimension}
          </ListGroupItem>
          <ListGroupItem>SO: {this.props.cardItem.os}</ListGroupItem>
          <ListGroupItem>
            <Boton text={this.buttonText} onClickButton={this.onClickCard} />
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default CardMovil;
