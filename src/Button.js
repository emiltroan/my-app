import React from "react"
import Button from 'react-bootstrap/Button';

export function RepeatButton(props) {
    return (
      <button 
        aria-label='Play again.' 
        id='repeatButton' 
        onClick={props.onClick}>
      </button>
    );
  }