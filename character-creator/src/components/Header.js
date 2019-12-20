import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <header>
      <span className="header"><FontAwesomeIcon icon={faDragon} /> Character Creator <FontAwesomeIcon icon={faDragon} flip="horizontal" /></span>
    </header>
  )
}

export default Header;