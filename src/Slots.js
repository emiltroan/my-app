import React, {useState} from "react";
import {Card, Button} from 'react-bootstrap';
import "./images/Diamant.jpg";
import {RepeatButton} from "./Button.js"

export function Slots(){

  document.addEventListener('keyup', e => {
    if (e.code=="Space" || e.key==" "){
      console.log("alfred er kul");
    }
  })
    
  

    const Diamant = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAyVBMVEX///8MNzAszbGM9OIglYGi9udK7dHR+vMbe2sw270sSUMfkX4AJBot0LTU+vQkppCa9eUJKiW9w8J+5dO3vbyUnpwAKiKS+ugAFQBM89Yy48QadWbk/Pg8z7YAHxQhmoXz9PMdgnEAGg1/jIkAAAAVYVR98dwNPDUHIh7Z3Nvs/fpS1LwSVEkei3k2UEsxrpkIJSEpwKbA+O7L0M9nd3QADAAaPTeIlJEAf2vY6+c07MxmdnMAGhYARDh34s4AWEk2Pz1Ognhihn+2tVsoAAADqUlEQVR4nO3d21baQBiGYbEgICG4ASWAUJC6q1RrRS3a7f1fVI/5v6zFMJ0EhPc9xuDDhIPZADs7gXraD1Ih1P8TrKgQpPaqHdIJMGDrETBgaxIwYGsSMGBrErD3BmtHQRqvVnH0LB0FSi58nSfsuX9iCvZKT82F20ehruxSS95Rwd4bfXPhCFiIgC0fsEwCtnzAMgnY8gHLJGDLByyTgC3fimHTvinYRHN8P980S9i4Pd845ckOfHoo2+KOafZin70dbl3E3nhRMwVW8igFVjV1hoeZ3fbAgAEDBgwYMGDAgAHbGFi7bzaKPWE6H4ttvexgzXPpm+17T3Jx2b+5KV1InT3TJBSs5bC/3NNbyAUm1zmwCi0JB3NYqAkFKwEDBgwYMGDAgAEDBgwYsP+ElbODFS5NUXawsm4ny2NuZD0j1nHWNQ+R2U3pTmc2Hs2XtifuCXMYjZRRdShWmF3eqXauzD/odmQCGDBgwIABAwYMGDBgGwNzOMjsOR9zKbH5wh5fH+d6bV5LD7b4RpIx1K10l0qNu/kaZzKGiRPsyWw4jxxOBBz09DEXH4J0WivOVztL/GD79kEpMBmLWB8TxpUG8xwxYMCAAQMGDBgwYMCAbTUsZT6WJ+zN/M/9TRmxy9v5fjQ/Sl6wlA8ClHOEybb07GU6soWCxXnCZHVHP3RQAAYMGDBgwIABAwYM2FbBZEdTP7+cIUx2pRM5JewLk/E5/ixlBSvWtImp9klcfrD4eFfKDDasLO4WGDBgwIABAwYMGDBgwDYUZqfLKbDT9wiTU9w/69JxoAa2op0vTyZDmy9spusptmSSMoX3aKIvmWZHdeC7NLDYtZfILeRXra53uQ0YMGDAgAEDBgwYMGDbBSvY73hygem2cIbzMYUV7WT0V1vPBMvx59b+F9Nv+4Hd5E7msMPFL7RbFXvhO5HV7XeLFdJOcUutyI7qm8K6dtWh63ALuVS3V+6mwEJ918Dawe6BAQMGDBgwYMCAAQMGbK1h1WCwPVuesMZX224o2JU9wF9t5Aer6GJK0Z6yDwbr5AqTlawBMGDAgAEDBgwYMGDAthv2bH95aDSWzx3nCavJ8eeG328jpSRj2JVX0WW33wnmcCJg5MlYDDtcLSy731xf8YgBAwYMGDBgwIABAwYMmK1vfj8p6g4UFiiFndj017V8O7f9sfP3SqURKLnwX3n2x2AwqRUd5tXIdz3DDybvusxyW4ECBgwYMGDAgAEDBgwYsHcH+wdzxR+mtxQuJAAAAABJRU5ErkJggg==";
    const Gull = "https://www.kindpng.com/picc/m/56-562028_minecraft-gold-ingot-hd-png-download.png";
    const Spiseri = "https://scontent.ftrd2-1.fna.fbcdn.net/v/t39.30808-6/243269117_105248288595113_8430978868112884102_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CG_l67hCfvQAX-wAm6S&_nc_ht=scontent.ftrd2-1.fna&oh=00_AfDwb1IKoSw_C3xgjEbvh_NL05xa4w0ceVmLNyS31vYjDA&oe=641E3D6A";
    const Tabulator = "https://st4.depositphotos.com/1000507/23839/v/600/depositphotos_238397248-stock-illustration-simple-vector-illustration-tab-keyboard.jpg"
    const Worgen = "https://krf.no/content/uploads/2020/09/Bilde-av-Hakon-Hafell-300x300.jpg"


    const allSlots = [Diamant, Gull, Tabulator, Spiseri, Worgen];
    let picker = ()=>Math.floor(Math.random() * 5).toFixed();

    const [slot1, setSlot1] = useState(allSlots[picker()]);
    const [slot2, setSlot2] = useState(allSlots[picker()]);
    const [slot3, setSlot3] = useState(allSlots[picker()]);

    const [money, setMoney] = useState(0);



    function Spin(){
          setMoney(money - 20);
          setSlot1(allSlots[picker()])
          setSlot2(allSlots[picker()])
          setSlot3(allSlots[picker()])

          if (slot1 === slot2 && slot2 === slot3){
            setMoney(money + 100);
          }

          if (slot1 === slot2 && slot2 === slot3){

          }
          
         
          

    }

    const roll = ()=>Spin();
    return (

    
        <>
          <div class="Cards">
            <Card>
              <Card.Img variant="top" src={slot1} style={{maxHeight: "200px", maxWidth: "200px"}}/>
              <Card.Img variant="top" src={slot2} style={{maxHeight: "200px", maxWidth: "200px"}}/>
              <Card.Img variant="top" src={slot3} style={{maxHeight: "200px", maxWidth: "200px"}}/>
            </Card>
          </div>
          <br />
          <RepeatButton onRoll={roll} />
           <h2 style={{color: "white"}}> {money} </h2>
           <Button onClick={()=> setMoney(money + 100   )}> Legg til 100  </Button>
        </>
    )
}