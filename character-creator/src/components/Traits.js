import React from 'react';

function Traits(props) {
  return (
    <div>
      <h2>Racial Traits</h2>
      {props.race.traits.map((trait, index) => {
        return (
          <div key={index}>
            <p>{trait.name}</p>
          </div>
        )
      })}
      <h2>Languages</h2>
      {props.race.languages.map((language, index) => {
        return (
          <div key={index}>
            <p>{language.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Traits;