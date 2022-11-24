import { PanelBody, TextareaControl } from '@wordpress/components'
import { InspectorControls, useBlockProps } from '@wordpress/block-editor'

import updater from '../utils/updater'
import Wrapper from './Wrapper'

const Edit = ({ attributes, setAttributes }) => {
  const { data } = attributes
  const updateAttribute = updater(setAttributes)

  return (
    <div {...useBlockProps()}>
      <InspectorControls>
        <PanelBody title={'Enter your JSON here'} initialOpen={true}>
          <TextareaControl
            label='JSON'
            help="Ask Mohammad for help if you don't know what to put here ;)"
            value={data}
            onChange={updateAttribute('data')}
          />
        </PanelBody>
      </InspectorControls>

      <div className='mt-block-tweet-generator-wrapper'>
        <Wrapper attributes={attributes} />
      </div>
    </div>
  )
}

export default Edit
