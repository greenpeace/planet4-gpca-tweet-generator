import { registerBlockType } from '@wordpress/blocks'
import { __ } from '@wordpress/i18n'

// import CardEdit from './card/edit';
// import CardSave from './card/save';
// import './card/style.scss';

import Edit from './components/Edit'
import Save from './components/Save'
import './styles/index.scss'

// import CategoryEdit from './category/edit';
// import CategorySave from './category/save';
// import './category/style.scss';

// import ListEdit from './list/edit';
// import ListSave from './list/save';
// import './list/style.scss';

// import { CardIcon, CategoryIcon, ListIcon } from "../common/icons";

// import mapStyles from "./common/mapStyles";

// const exampleCardAttributes = {
// 	url: 'https://perdu.com',
// 	title: "Perdu sur l'Internet?",
// 	desc:
// 		'Un site web facétieux consistant en un détournement du concept du « vous êtes ici »',
// 	imgSrc: 'url',
// 	imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Perdu.svg',
// 	imgAlt: 'Screenshot',
// 	mediaId: 0,
// 	eventDate: 'Depuis le 19 juin 1996',
// 	eventLocation: 'perdu.com',
// };

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
    // url: {
    // 	type: "string",
    // 	source: "attribute",
    // 	selector: "a",
    // 	attribute: "href",
    // },
    // target: {
    // 	type: "string",
    // 	source: "attribute",
    // 	selector: ".card-title a",
    // 	attribute: "target",
    // 	default: "_self",
    // },
    // imgSrc: {
    // 	type: "string",
    // 	default: "lib",
    // },
    // imgUrl: {
    // 	type: "string",
    // },
    // mediaId: {
    // 	type: "number",
    // 	default: 0,
    // },
    // mediaUrl: {
    // 	type: "string",
    // },
    // imageUrl: {
    // 	type: "string",
    // 	source: "attribute",
    // 	selector: "img",
    // 	attribute: "src",
    // },
    // imgAlt: {
    // 	type: "string",
    // 	source: "attribute",
    // 	selector: "img",
    // 	attribute: "alt",
    // },
    // title: {
    // 	type: "string",
    // 	source: "html",
    // 	selector: "a",
    // },
    // desc: {
    // 	type: "string",
    // 	source: "html",
    // 	selector: ".card-desc",
    // },
    // eventDate: {
    // 	type: "string",
    // 	source: "html",
    // 	selector: ".card-event-date",
    // },
    // eventLocation: {
    // 	type: "string",
    // 	source: "html",
    // 	selector: ".card-event-location",
    // },
    // coordinates: {
    // 	type: "string",
    // 	source: "html",
    // 	selector: ".card-coordinates",
    // },
  },
  example: {
    attributes: exampleAttributes,
  },
})
