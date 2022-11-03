import { useBlockProps } from '@wordpress/block-editor'
import Form from './Form'

const Save = (props) => {
  return (
    <div {...useBlockProps.save()}>
      <Form attributes={props.attributes} />
    </div>
  )
}

export default Save
