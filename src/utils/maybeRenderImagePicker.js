import React from 'react'

export default function maybeRenderImagePicker(
  selectedCharacter,
  characters,
  characterImage,
  setCharacterImage,
  setImageUrl
) {
  if (!selectedCharacter) return null

  return (
    <>
      <label>Select Image</label>

      {characters[selectedCharacter].images.map((characterImg, i) => (
        <div className='preview-image-container' key={i}>
          <input
            type='radio'
            value={characterImg}
            checked={characterImg.preview === characterImage}
            onChange={() => {
              setCharacterImage(characterImg.preview)
              setImageUrl(characterImg.value)
            }}
          />

          <img src={characterImg.preview} className='preview-image' />
        </div>
      ))}
    </>
  )
}
