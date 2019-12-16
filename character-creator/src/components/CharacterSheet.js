import React from 'react';

function CharacterSheet(props) {
  return (
    <div>
      <h1>NAME:</h1>
      <h3>Level 1 {props.character.race} {props.character.class}</h3>
    </div>
  )
}

export default CharacterSheet;