import React, { useState } from 'react'
import Form from './Form'

export default function Wrapper(props) {
  const { attributes } = props

  const [selectedTarget, setSelectedTarget] = useState(undefined)
  const [selectedCharacter, setSelectedCharacter] = useState(undefined)
  const [characterImage, setCharacterImage] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(undefined)
  const [selectedTweetTemplate, setSelectedTweetTemplate] = useState(undefined)

  return (
    <div className='mt-block-tweet-generator' data-mt-attributes={attributes}>
      <Form
        attributes={attributes}
        selectedTarget={selectedTarget}
        setSelectedTarget={setSelectedTarget}
        selectedCharacter={selectedCharacter}
        setSelectedCharacter={setSelectedCharacter}
        characterImage={characterImage}
        setCharacterImage={setCharacterImage}
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        selectedTweetTemplate={selectedTweetTemplate}
        setSelectedTweetTemplate={setSelectedTweetTemplate}
      />
    </div>
  )
}
