import React from 'react'
import { PanelBody, TextareaControl } from '@wordpress/components'
import { InspectorControls } from '@wordpress/block-editor'

import Preview from './Preview'
import updater from '../utils/updater'

const Edit = ({
  attributes: {
    data
  },
  setAttributes
}) => {
  const updateAttribute = updater(setAttributes);
  return (
    <>
      <InspectorControls>
        <PanelBody title={'Config'} initialOpen={true}>
          <TextareaControl
            label='JSON'
            help="Ask Mohammad for help if you don't know what to put here ;)"
            value={data}
            onChange={updateAttribute('data')}
          />
        </PanelBody>
      </InspectorControls>
      <Preview attributes={{ data }} />
    </>
  )
}

export default Edit
