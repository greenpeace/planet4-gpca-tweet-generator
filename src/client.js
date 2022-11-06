import React from 'react'
import ReactDOM from 'react-dom'
import Wrapper from './components/Wrapper'

window.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.mt-block-tweet-generator')
  if (forms) {
    Array.from(forms).forEach(((form) => {
      const attributes = JSON.parse(form?.dataset?.mtAttributes || null)
      ReactDOM.hydrate(<Wrapper attributes={attributes} />, form)
    }))
  }
})
