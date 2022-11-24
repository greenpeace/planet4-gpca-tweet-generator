import { useBlockProps } from '@wordpress/block-editor'
import Form from './Form'

const Save = ({ attributes }) => {
  return (
    <div {...useBlockProps.save()} className='mt-block-tweet-generator-wrapper' data-mt-attributes={JSON.stringify(attributes)}>
      <div className='mt-block-tweet-generator'>
        <Form attributes={attributes} />
      </div>
    </div>
  )
}

export default Save
