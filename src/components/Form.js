import Tweet from './Tweet'
import Button from './Button'

import maybeRenderImagePicker from '../utils/maybeRenderImagePicker'

const Form = ({
  attributes,
  selectedTarget,
  setSelectedTarget,
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

    const { characters, targets } = parsed

    const tweet = {
      target: targets?.[selectedTarget]?.['twitter-handle'],
      // imgPreview: characterImage,
      // imgURL: imageUrl,
      body: selectedTweetTemplate,
      character: characters[selectedCharacter]?.name,
    }

    const {
      target = '<target>',
      character = '<character>',
      // imgPreview,
      // imgURL,
      body,
    } = tweet

    if (
      body !== undefined &&
      target !== undefined &&
      target !== '<target>' &&
      // imgPreview !== undefined &&
      // imgURL !== undefined &&
      character !== undefined &&
      character !== '<character>'
    ) {
      disabled = false
    } else {
      disabled = true
    }

    let updatedTweetBody
    let tweetContent
    if (body !== undefined) {
      updatedTweetBody = body
        .replace('<target>', target)
        .replace('<character>', character)

      tweetContent = updatedTweetBody.replaceAll('#', '%40')
    }

    const tweetURL = `https://twitter.com/intent/tweet?text=${tweetContent}`

    return (
      <div className='tweet-container'>
        <div className='form-container'>
          <label className='step-label'>Step 1: Pick Target</label>
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

          <label className='step-label'>Step 2: Pick Endangered Species</label>
          <select
            onChange={({ target }) => {
              setSelectedCharacter(target.value)
              // setImageUrl(undefined)
              // setCharacterImage(undefined)
            }}
          >
            <option value=''>Select Species</option>
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

          <label className='step-label'>Step 3: Select Template</label>
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
          <Button disabled={disabled} href={tweetURL} />
        </div>
      </div>
    )
  } catch (error) {
    console.error(error)
    return <p>Incorrect JSON</p>
  }
}

export default Form
