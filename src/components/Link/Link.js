import React from 'react'
import './Link.css'

function Link(props) {
  return (
    <a className='Link navLinks' href={"#" + props.name} title={props.name}>{props.name}</a>
  )
}
export default Link;
// Link Function