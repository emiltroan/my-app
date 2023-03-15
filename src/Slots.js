import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Slots(){

    return (
<>



    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>TABULATOR</Card.Title>
        <Card.Text>
          Tabulator er min favoritt-tast på tastaturet.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</>
    )
}