import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = ({ icons }) => {
    return (
        <div className="icons flex gap-4">
            {icons.map((icon, index) => (
                <FontAwesomeIcon key={index} icon={icon} size="3x" className='icons__icon' />
            ))}
        </div>
    )
}

export default Icons
