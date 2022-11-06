import React from 'react'

const Form = ({ attributes, selectedBank, setSelectedBank, selectedCharacter, setSelectedCharacter }) => {
  if (!attributes) {
    return null
  }
  const { data } = attributes

  if (!data) {
    return null
  }

  try {
    const parsed = JSON.parse(data)
    return (
      <div className='form-container'>
        <label>Pick Target</label>
        <select onChange={({ target }) => {
          setSelectedBank(target.value)
        }} defaultValue={selectedBank}>
          <option>Select Target</option>
          {Object.keys(parsed.banks).map((key, i) => (
            <option key={i}>{parsed.banks[key].name}</option>
          ))}
        </select>

        <label>Pick Character</label>
        <select onChange={({ target }) => {
          setSelectedCharacter(target.value)
        }} defaultValue={selectedCharacter}>
          <option>Pick Character</option>
          {Object.keys(parsed.characters).map((key, i) => (
            <option key={i}>{parsed.characters[key].name}</option>
          ))}
        </select>
        <p>Selected bank: {selectedBank}</p>
        <p>Selected character: {selectedCharacter}</p>
      </div>
    )
  } catch (error) {
    console.log(error)
    return null
  }
}

export default Form
