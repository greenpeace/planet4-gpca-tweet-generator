import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './components/Wrapper'

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelectorAll('mt-block-user-card-wrapper')

  if (form) {
    ReactDOM.hydrate(<Wrapper />, form)
  }
})
