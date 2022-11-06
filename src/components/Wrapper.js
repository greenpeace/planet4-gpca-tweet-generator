import React, { useState } from 'react'
import Form from './Form'

export default function Wrapper(props) {
  const { attributes } = props

  const [selectedBank, setSelectedBank] = useState(null)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  return (
    <div className='mt-block-tweet-generator' data-mt-attributes={attributes}>
      <Form
        attributes={attributes}
        selectedBank={selectedBank}
        setSelectedBank={setSelectedBank}
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
      />
    </div>
  )
}
