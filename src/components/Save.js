import { useBlockProps } from '@wordpress/block-editor'
import Form from './Form'

const Save = ({ attributes }) => {
  return (
    <div {...useBlockProps.save()} className='mt-block-tweet-generator-wrapper'>
      <div className='mt-block-tweet-generator' data-mt-attributes={JSON.stringify(attributes)}>
        <Form attributes={attributes} />
      </div>
    </div>
  )
}

export default Save
