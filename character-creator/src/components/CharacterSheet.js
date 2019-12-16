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