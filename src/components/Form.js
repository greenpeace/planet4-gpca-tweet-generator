import { useState } from '@wordpress/element'

const Form = ({ data }) => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(undefined)
  const [characterImage, setCharacterImage] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(undefined)
  const [selectedBank, setSelectedBank] = useState(undefined)
  const [selectedTweetTemplate, setSelectedTweetTemplate] = useState(undefined)

  const tweet = {
    bank: data.banks[selectedBank]?.['twitter-en'],
    imagePrev: characterImage,
    imageUrl: imageUrl,
    body: selectedTweetTemplate,
    character: data.characters[selectedCharacterId]?.name,
  }

  const handleCharacterChange = (e) => {
    const { value } = e.target

    setSelectedCharacterId(value)

    setCharacterImage(undefined)
  }

  const maybeRenderImagePicker = () => {
    if (!selectedCharacterId) return null

    return (
      <>
        <label>Select Image</label>
        <div className='preview-img-container'>
          {data.characters[selectedCharacterId].images.map((characterImg) => (
            <>
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
            </>
          ))}
        </div>
      </>
    )
  }

  return (
    <>
      <div className='form-container'>
        <label>Pick Target</label>
        <select>
          <option>Select Target</option>
          {Object.keys(data.banks).map((key, i) => (
            <option key={i}>{data.banks[key].name}</option>
          ))}
        </select>

        <label>Pick Character</label>
        <select>
          <option>Pick Character</option>
          {Object.keys(data.characters).map((key, i) => (
            <option key={i}>{data.characters[key].name}</option>
          ))}
        </select>
      </div>
    </>
  )
}

export default Form
