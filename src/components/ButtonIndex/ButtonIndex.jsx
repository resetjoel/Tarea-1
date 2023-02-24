import React from 'react'
import './buttonindex.css'

export default function ButtonIndex(props) {
  return (
    <button className={props.style}>{props.text || props.children}</button>
  )
}
