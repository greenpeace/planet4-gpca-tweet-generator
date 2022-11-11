import React from 'react'

import Tweet from './Tweet'

import maybeRenderImagePicker from '../utils/maybeRenderImagePicker'

const Form = ({
  attributes,
  selectedTarget,
  setSelectedTarget,
  selectedCharacter,
  setSelectedCharacter,
  characterImage,
  setCharacterImage,
  imageUrl,
  setImageUrl,
  selectedTweetTemplate,
  setSelectedTweetTemplate,
}) => {
  if (!attributes) {
    return null
  }
  const { data } = attributes

  if (!data) {
    return null
  }
  const parsed = JSON.parse(data)

  const { characters, targets } = parsed

  const tweet = {
    target: targets?.[selectedTarget]?.['twitter-en'],
    imgPreview: characterImage,
    imgURL: imageUrl,
    body: selectedTweetTemplate,
    character: characters[selectedCharacter]?.name,
  }

  try {
    return (
      <div className='form-container'>
        <label>Pick Target</label>
        <select
          onChange={({ target }) => {
            setSelectedTarget(target.value)
          }}
        >
          <option value=''>Select Target</option>
          {Object.keys(targets || {}).map((key, i) => (
            <option key={i} value={key}>
              {targets[key].name}
            </option>
          ))}
        </select>

        <label>Pick Character</label>
        <select
          onChange={({ target }) => {
            setSelectedCharacter(target.value)
            setImageUrl(undefined)
          }}
        >
          <option value=''>Pick Character</option>
          {Object.keys(characters).map((key, i) => (
            <option key={i} value={key}>
              {characters[key].name}
            </option>
          ))}
        </select>

        {maybeRenderImagePicker(
          selectedCharacter,
          characters,
          characterImage,
          setCharacterImage,
          setImageUrl
        )}

        <label>Select Template</label>
        {(parsed['tweet-body'] || []).map((item, i) => (
          <div key={i} className='rb-container'>
            <input
              type='radio'
              name='body'
              value={item['tweet-en']}
              onChange={({ target }) => setSelectedTweetTemplate(target.value)}
            />
            <label>{item['tweet-en']}</label>
          </div>
        ))}

        <Tweet tweet={tweet} />
      </div>
    )
  } catch (error) {
    console.log(error)
    return null
  }
}

export default Form
