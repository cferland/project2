import React from 'react';

function Alignment(props) {
  return (
    <div className="alignment">
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Lawful Good" />
        Lawful Good
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Neutral Good" />
        Neutral Good
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Chaotic Good" />
        Chaotic Good
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Lawful Neutral" />
        Lawful Neutral
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="True Neutral" />
        True Neutral
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Chaotic Neutral" />
        Chaotic Neutral
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Lawful Evil" />
        Lawful Evil
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Neutral Evil" />
        Neutral Evil
      </div>
      <div>
        <input type="radio" onChange={props.handleRadio} name="alignment" value="Chaotic Evil" />
        Chaotic Evil
      </div>
    </div>
  )
}

export default Alignment;