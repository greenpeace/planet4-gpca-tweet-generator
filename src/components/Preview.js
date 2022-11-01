import React from 'react'

const Preview = ({ attributes: { data } }) => {
  if (!data) {
    return null
  }
  try {
    const parsed = JSON.parse(data)
    if (!parsed.banks) {
      return <p>Error: Missing banks!</p>
    }
    return (
      <>
        <div>Save Component</div>
        <select>
          {parsed.banks.map((bank) => {
            return <option>{bank}</option>
          })}
        </select>
      </>
    )
  } catch (ex) {
    console.error(ex)
    return null
  }
}

export default Preview
