import React from "react"
import Button from 'react-bootstrap/Button';

export function RepeatButton({onRoll}) {
  return (
    <button
      aria-label='Play again.' 
      id='repeatButton' 
      onClick={onRoll}>
    </button>
  );
}