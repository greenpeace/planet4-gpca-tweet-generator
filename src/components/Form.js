import Tweet from './Tweet'
import Button from './Button'

import maybeRenderImagePicker from '../utils/maybeRenderImagePicker'

const Form = ({
  attributes,
  // selectedTarget,
  // setSelectedTarget,
  selectedCharacter,
  setSelectedCharacter,
  // characterImage,
  // setCharacterImage,
  // imageUrl,
  // setImageUrl,
  selectedTweetTemplate,
  setSelectedTweetTemplate,
  disabled,
  setDisabled,
}) => {
  if (!attributes) {
    return null
  }
  const { data } = attributes

  if (!data) {
    return null
  }

  try {
    const parsed = JSON.parse(data)

    const { characters, targets, labels, button, preview_label } = parsed

    const tweet = {
      // target: targets?.[selectedTarget]?.['twitter-handle'],
      // imgPreview: characterImage,
      // imgURL: imageUrl,
      body: selectedTweetTemplate,
      character: characters[selectedCharacter]?.name,
    }

    const {
      // target = '<target>',
      character = preview_label,
      // imgPreview,
      // imgURL,
      body,
    } = tweet

    if (
      body !== undefined &&
      // target !== undefined &&
      // target !== '<target>' &&
      // imgPreview !== undefined &&
      // imgURL !== undefined &&
      character !== undefined &&
      character !== preview_label
    ) {
      disabled = false
    } else {
      disabled = true
    }

    let updatedTweetBody
    let tweetContent

    if (body !== undefined) {
      if (body.includes(preview_label)) {
        updatedTweetBody = body.replace(preview_label, character)
        tweetContent = updatedTweetBody.replaceAll('#', '%23')
      }
    }

    const tweetURL = `https://twitter.com/intent/tweet?text=${tweetContent}`

    return (
      <div className='tweet-container'>
        <div className='form-container'>
          {/* <label className='step-label'>{labels.label_1.name}</label>
          <select
            onChange={({ target }) => {
              setSelectedTarget(target.value)
            }}
          >
            <option value=''>{labels.label_1['input-label']}</option>
            {Object.keys(targets || {}).map((key, i) => (
              <option key={i} value={key}>
                {targets[key].name}
              </option>
            ))}
          </select> */}

          <label className='step-label'>{labels.label_2.name}</label>
          <select
            onChange={({ target }) => {
              setSelectedCharacter(target.value)
              // setImageUrl(undefined)
              // setCharacterImage(undefined)
            }}
          >
            <option value=''>{labels.label_2['input-label']}</option>
            {Object.keys(characters || {}).map((key, i) => (
              <option key={i} value={key}>
                {characters[key].name}
              </option>
            ))}
          </select>

          {/* {maybeRenderImagePicker(
            selectedCharacter,
            characters,
            characterImage,
            setCharacterImage,
            setImageUrl
          )} */}

          <label className='step-label'>{labels.label_3.name}</label>
          {(parsed['tweet-body'] || []).map((item, i) => (
            <div key={i} className='tweet-body-container'>
              <input
                type='radio'
                name='body'
                value={item['tweet']}
                onChange={({ target }) =>
                  setSelectedTweetTemplate(target.value)
                }
              />
              <label>{item['tweet']}</label>
            </div>
          ))}
        </div>
        <div className='tweet-card-container'>
          <Tweet tweet={tweet} updatedTweetBody={updatedTweetBody} />
          <Button disabled={disabled} href={tweetURL} text={button.text} />
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    return <p>Incorrect JSON</p>
  }
}

export default Form
