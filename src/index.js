import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

import Edit from './components/Edit'
import Save from './components/Save'
import './styles/index.scss'

const exampleAttributes = {
  data: '{}',
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
