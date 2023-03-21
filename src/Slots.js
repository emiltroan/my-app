import React from "react"
import Card from 'react-bootstrap/Card';

export function Slots(){

    const allSlots = ["Diamant", "Gull", "TABULATOR", "Emil", "Worgen"];

    let slot1 = "Diamant";
    let slot2 = "Stein";
    let slot3 = "Gull";


    let picker = Math.floor(Math.random() * 5).toFixed();

    function Spin(){

        slot1 = allSlots[Number(picker)];
        console.log(slot1);
        slot2 = allSlots[Number(picker)]
        console.log(slot2);
        slot3 = allSlots[Number(picker)]
        console.log(slot3);

    }

    Spin();

    return (
<>
  <div class="Cards">
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" height="400px" width="130px" />
      <Card.Img variant="top" src="holder.js/100px180" height="400px" width="130px" />
      <Card.Img variant="top" src="holder.js/100px180" height="400px" width="130px" />
    </Card>
  </div>
</>
    )
}