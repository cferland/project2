import React from 'react';

function CharacterSheet(props) {
  return (
    <div>
      <h1>NAME:</h1>
      <h3>Level 1 {props.character.race} {props.character.class}</h3>
      <h4>Hit Points: {props.character.hitDie}</h4>
      <h2>Abilities</h2>
      <h4>STR: {props.character.abilities.str}</h4>
      <h4>DEX: {props.character.abilities.dex}</h4>
      <h4>CON: {props.character.abilities.con}</h4>
      <h4>INT: {props.character.abilities.int}</h4>
      <h4>WIS: {props.character.abilities.wis}</h4>
      <h4>CHA: {props.character.abilities.cha}</h4>
    </div>
  )
}

export default CharacterSheet;