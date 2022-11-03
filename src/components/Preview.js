import Form from './Form'

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
        <Form data={parsed} />
      </>
    )
  } catch (ex) {
    console.error(ex)
    return null
  }
}

export default Preview
