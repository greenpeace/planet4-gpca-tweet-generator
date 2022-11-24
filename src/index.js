import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import Edit from './components/Edit'
import Save from './components/Save'

import './index.scss'

const exampleAttributes = {
  data: '{"banks":{"<bankName>":{"name":"BANK NAME"}},"characters":{"<characterName>":{"name":"CHARACTER NAME", "images": [{ "preview": "https://via.placeholder.com/512", "value": "https://via.placeholder.com/512" }]}}}',
}

registerBlockType('twitter/tweetgen', {
  apiVersion: 2,
  title: __('Tweet Generator', 'twitter'),
  description: __('Generate tweets from list of images and text', 'twitter'),
  category: 'text',
  icon: '',
  edit: Edit,
  save: Save,
  attributes: {
    data: {
      type: 'string',
    },
  },
  example: {
    attributes: exampleAttributes,
  },
})
