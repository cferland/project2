import React from 'react';

function CharacterSheet(props) {
  return (
    <div className="character-sheet">
      <h1>{props.character.name}</h1>
      <h3>Level 1 {props.character.race} {props.character.class}</h3>
      <h4>Hit Points: {props.character.hitDie + props.character.modifiers.con} (1d{props.character.hitDie})</h4>
      <h4>Armor Class: {10 + props.character.modifiers.dex}</h4>
      <h2>Ability Scores</h2>
      <ul className="abilities">
        <li><span className="ability">Strength:</span><p>{props.character.abilities.str} ({props.character.modifiers.str >= 0 ? "+" : ""}{props.character.modifiers.str})</p></li>
        <li><span className="ability">Dexterity:</span><p>{props.character.abilities.dex} ({props.character.modifiers.dex >= 0 ? "+" : ""}{props.character.modifiers.dex})</p></li>
        <li><span className="ability">Constitution:</span><p>{props.character.abilities.con} ({props.character.modifiers.con >= 0 ? "+" : ""}{props.character.modifiers.con})</p></li>
        <li><span className="ability">Intelligence:</span><p>{props.character.abilities.int} ({props.character.modifiers.int >= 0 ? "+" : ""}{props.character.modifiers.int})</p></li>
        <li><span className="ability">Wisdom:</span><p>{props.character.abilities.wis} ({props.character.modifiers.wis >= 0 ? "+" : ""}{props.character.modifiers.wis})</p></li>
        <li><span className="ability">Charisma:</span><p>{props.character.abilities.cha} ({props.character.modifiers.cha >= 0 ? "+" : ""}{props.character.modifiers.cha})</p></li>
      </ul>
      <h2>Skills</h2>
      <ul className="skills">
        <li><div className={props.character.proficiencies.includes('Skill: Athletics') ? "selected" : "unselected"}></div>Athletics</li>
        <li><div className={props.character.proficiencies.includes('Skill: Acrobatics') ? "selected" : "unselected"}></div>Acrobatics</li>
        <li><div className={props.character.proficiencies.includes('Skill: Stealth') ? "selected" : "unselected"}></div>Stealth</li>
        <li><div className={props.character.proficiencies.includes('Skill: Sleight of Hand') ? "selected" : "unselected"}></div>Sleight of Hand</li>
        <li><div className={props.character.proficiencies.includes('Skill: Survival') ? "selected" : "unselected"}></div>Survival</li>
        <li><div className={props.character.proficiencies.includes('Skill: Animal Handling') ? "selected" : "unselected"}></div>Animal Handling</li>
        <li><div className={props.character.proficiencies.includes('Skill: Nature') ? "selected" : "unselected"}></div>Nature</li>
        <li><div className={props.character.proficiencies.includes('Skill: History') ? "selected" : "unselected"}></div>History</li>
        <li><div className={props.character.proficiencies.includes('Skill: Religion') ? "selected" : "unselected"}></div>Religion</li>
        <li><div className={props.character.proficiencies.includes('Skill: Arcana') ? "selected" : "unselected"}></div>Arcana</li>
        <li><div className={props.character.proficiencies.includes('Skill: Medicine') ? "selected" : "unselected"}></div>Medicine</li>
        <li><div className={props.character.proficiencies.includes('Skill: Investigation') ? "selected" : "unselected"}></div>Investigation</li>
        <li><div className={props.character.proficiencies.includes('Skill: Perception') ? "selected" : "unselected"}></div>Perception</li>
        <li><div className={props.character.proficiencies.includes('Skill: Insight') ? "selected" : "unselected"}></div>Insight</li>
        <li><div className={props.character.proficiencies.includes('Skill: Persuasion') ? "selected" : "unselected"}></div>Persuasion</li>
        <li><div className={props.character.proficiencies.includes('Skill: Deception') ? "selected" : "unselected"}></div>Deception</li>
        <li><div className={props.character.proficiencies.includes('Skill: Intimidation') ? "selected" : "unselected"}></div>Intimidation</li>
        <li><div className={props.character.proficiencies.includes('Skill: Performance') ? "selected" : "unselected"}></div>Performance</li>
      </ul>
      <h2>Proficiencies</h2>
      <ul className="skills">
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