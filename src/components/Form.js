const Form = (props) => {
  const { data } = props.attributes

  if (!data) {
    return null
  }

  try {
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
  } catch (error) {
    console.log(error)
    return null
  }
}

export default Form
