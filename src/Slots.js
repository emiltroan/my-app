import React from "react"
import Card from 'react-bootstrap/Card';

export function Slots(){

  
  const allSlots = ["Diamand", "Gull", "TABULATOR", "Emil", "Worgen"];


  let slot1 = useState("diamant");
  let slot2 = useState("Stein");
  let slot3 = useState("Gull");
  
  
  function spin(){
    const picker = Math.floor(Math.random() *6);
  }

  slot1 = allSlots[number(picker)]
  console.log(slot1)
  slot2 = allSlots[number(picker)]
  console.log(slot2)
  slot3 = allSlots[number(picker)]
  console.log(slot3)

  spin();

  
  return (
<>


  <div class="Cards">
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" height="400px" width="130px" />
        <p>{slot1}</p>
      <Card.Img variant="top" src="holder.js/100px180" height="400px" width="130px" />
      <Card.Img variant="top" src="holder.js/100px180" height="400px" width="130px" />
    </Card>
  </div>
</>
    )
}