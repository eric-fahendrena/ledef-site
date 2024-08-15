import { useState } from 'react'
import * as Icon from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const SectionLink = ({ to, children }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
      <Link 
        to={to} 
        className='fs-5'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children} <Icon.ArrowRight className={hovered ? 'ms-4' : ''} style={{ transition: 'all .1s ease'}} />
      </Link>
    </>
  )
}

export default SectionLink
