import React from 'react'

const Button = ({ href, disabled, text }) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener'
      className={disabled ? 'btn-disabled' : 'tweet-btn'}
      data-ga-category='Twitter Plugin'
      data-ga-action='Send Tweet'
    >
      {text}
    </a>
  )
}

export default Button
