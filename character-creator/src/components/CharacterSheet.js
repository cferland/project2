import React from 'react';

function CharacterSheet(props) {
  return (
    <div>
      <h1>NAME:</h1>
      <h3>Level 1 {props.character.race} {props.character.class}</h3>
      <h4>Hit Points: {props.character.hitDie + props.character.modifiers.con} (1d{props.character.hitDie})</h4>
      <h4>Armor Class: {10 + props.character.modifiers.dex}</h4>
      <h2>Abilities</h2>
      <h4>STR: {props.character.abilities.str} ({props.character.modifiers.str >= 0 ? "+" : ""}{props.character.modifiers.str})</h4>
      <h4>DEX: {props.character.abilities.dex} ({props.character.modifiers.dex >= 0 ? "+" : ""}{props.character.modifiers.dex})</h4>
      <h4>CON: {props.character.abilities.con} ({props.character.modifiers.con >= 0 ? "+" : ""}{props.character.modifiers.con})</h4>
      <h4>INT: {props.character.abilities.int} ({props.character.modifiers.int >= 0 ? "+" : ""}{props.character.modifiers.int})</h4>
      <h4>WIS: {props.character.abilities.wis} ({props.character.modifiers.wis >= 0 ? "+" : ""}{props.character.modifiers.wis})</h4>
      <h4>CHA: {props.character.abilities.cha} ({props.character.modifiers.cha >= 0 ? "+" : ""}{props.character.modifiers.cha})</h4>
      <ul>
        <h2>Skills</h2>
        <li className={props.character.proficiencies.includes('Skill: Athletics') ? "selected" : "unselected"}>Athletics</li>
        <li className={props.character.proficiencies.includes('Skill: Acrobatics') ? "selected" : "unselected"}>Acrobatics</li>
        <li className={props.character.proficiencies.includes('Skill: Stealth') ? "selected" : "unselected"}>Stealth</li>
        <li className={props.character.proficiencies.includes('Skill: Sleight of Hand') ? "selected" : "unselected"}>Sleight of Hand</li>
        <li className={props.character.proficiencies.includes('Skill: Survival') ? "selected" : "unselected"}>Survival</li>
        <li className={props.character.proficiencies.includes('Skill: Animal Handling') ? "selected" : "unselected"}>Animal Handling</li>
        <li className={props.character.proficiencies.includes('Skill: Nature') ? "selected" : "unselected"}>Nature</li>
        <li className={props.character.proficiencies.includes('Skill: History') ? "selected" : "unselected"}>History</li>
        <li className={props.character.proficiencies.includes('Skill: Religion') ? "selected" : "unselected"}>Religion</li>
        <li className={props.character.proficiencies.includes('Skill: Arcana') ? "selected" : "unselected"}>Arcana</li>
        <li className={props.character.proficiencies.includes('Skill: Medicine') ? "selected" : "unselected"}>Medicine</li>
        <li className={props.character.proficiencies.includes('Skill: Investigation') ? "selected" : "unselected"}>Investigation</li>
        <li className={props.character.proficiencies.includes('Skill: Perception') ? "selected" : "unselected"}>Perception</li>
        <li className={props.character.proficiencies.includes('Skill: Insight') ? "selected" : "unselected"}>Insight</li>
        <li className={props.character.proficiencies.includes('Skill: Persuasion') ? "selected" : "unselected"}>Persuasion</li>
        <li className={props.character.proficiencies.includes('Skill: Deception') ? "selected" : "unselected"}>Deception</li>
        <li className={props.character.proficiencies.includes('Skill: Intimidation') ? "selected" : "unselected"}>Intimidation</li>
        <li className={props.character.proficiencies.includes('Skill: Performance') ? "selected" : "unselected"}>Performance</li>
      </ul>
      <ul>
        <h2>Other Proficiencies</h2>
        {props.character.proficiencies.filter((proficiency) => !proficiency.includes('Skill:')).map((proficiency, index) => {
          return (
            <li key={index}>{proficiency}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default CharacterSheet;