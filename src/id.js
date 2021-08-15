import React from 'react'
import bootstrap from 'bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import 'bootstrap/dist/css/bootstrap.css';

function Id({data}) {


    const {name,email,phone,website,company,idNo,pic}=data;

    const src = URL.createObjectURL(pic);

    console.log( data)
    return (
        <div>
            
            <Card id="card" style={{ width: '18rem' }}>
  <Card.Img id="pic" src={src} variant="top" />
  <Card.Body>
    <Card.Title className="text-center" >{company}</Card.Title>
    <Card.Subtitle className="text-center">{name}</Card.Subtitle>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem  className="text-center" > <strong>ID Number: </strong>{idNo}</ListGroupItem>
    <ListGroupItem className="text-center" ><strong>E-mail: </strong>{email}</ListGroupItem>
    <ListGroupItem  className="text-center" ><strong>ID Number: </strong>{idNo}</ListGroupItem>
    <ListGroupItem  className="text-center" ><strong>Contact Number: </strong>{phone}</ListGroupItem>
    <ListGroupItem  className="text-center" ><strong>Website: </strong>{website}</ListGroupItem>
  </ListGroup>
  
</Card>

        </div>
    )
}

export default Id
