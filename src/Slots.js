import React, {useState} from "react"
import Card from 'react-bootstrap/Card';


export function Slots(){

    const allSlots = ["Diamant", "Gull", "TABULATOR", "Emil", "Worgen"];

    const [slot1, setSlot1] = useState("Diamant");
    const [slot2, setSlot2] = useState("Diamant");
    const [slot3, setSlot3] = useState("Diamant");


    let picker = ()=>Math.floor(Math.random() * 5).toFixed();

    function Spin(){
        setSlot1(allSlots[picker()])
        setSlot2(allSlots[picker()])
        setSlot3(allSlots[picker()])
    }

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