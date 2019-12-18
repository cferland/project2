import React from 'react';

function Traits(props) {
  return (
    <div>
      {props.traits.length > 0 &&
        <h2>Racial Traits</h2>}
      {props.traits.length > 0 &&
        <ul className="sheet-list">
          {props.traits.map((trait, index) => {
            return (
              <li key={index}>
                <div className="spacer">
                </div>
                {trait.name}
              </li>
            )
          })}
        </ul>}
      <h2>Proficiencies</h2>
      <ul className="sheet-list">
        {props.proficiencies.filter((proficiency) => !proficiency.includes('Skill:')).map((proficiency, index) => {
          return (
            <li key={index}>
              <div className="spacer">
              </div>
              {proficiency}
            </li>
          )
        })}
      </ul>
      <h2>Languages</h2>
      <ul className="sheet-list">
        {props.languages.map((language, index) => {
          return (
            <li key={index}>
              <div className="spacer">
              </div>
              {language.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Traits;