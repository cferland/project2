import React from 'react';

function Alignment(props) {
  return (
    <div className="alignment">
      <div title="Lawful Good characters are principled and righteous.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Lawful Good" />
        Lawful Good
      </div>
      <div title="Neutral Good characters are generous and sincere.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Neutral Good" />
        Neutral Good
      </div>
      <div title="Chaotic Good characters are compassionate and rebellious.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Chaotic Good" />
        Chaotic Good
      </div>
      <div title="Lawful Neutral characters are disciplined and austere.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Lawful Neutral" />
        Lawful Neutral
      </div>
      <div title="True Neutral characters are tolerant and impartial.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="True Neutral" />
        True Neutral
      </div>
      <div title="Chaotic Neutral characters are anarchic and irresponsible.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Chaotic Neutral" />
        Chaotic Neutral
      </div>
      <div title="Lawful Evil characters are manipulative and calculating.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Lawful Evil" />
        Lawful Evil
      </div>
      <div title="Neutral Evil characters are callous and hostile.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Neutral Evil" />
        Neutral Evil
      </div>
      <div title="Chaotic Evil characters are tactless and depraved.">
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Chaotic Evil" />
        Chaotic Evil
      </div>
    </div>
  )
}

export default Alignment;