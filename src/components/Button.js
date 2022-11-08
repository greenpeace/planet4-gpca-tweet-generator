import React from 'react'

const Button = ({ href }) => {
  return (
    <a href={href} target='_blank'>
      Click to tweet
    </a>
  )
}

export default Button
