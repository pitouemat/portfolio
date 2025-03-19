import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Button = () => {
  return (
    <div className="button__area">
        <button>Leia mais <FontAwesomeIcon icon={faArrowDown} /></button>
    </div>
  )
}

export default Button
