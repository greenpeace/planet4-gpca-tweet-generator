import React from 'react'

const Button = ({ href, disabled }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener'
      className={disabled ? 'btn-disabled' : 'tweet-btn'}
    >
      Click to tweet
    </a>
  )
}

export default Button
