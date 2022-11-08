import React from 'react'
import Button from './Button'

import {
  BsArrowLeftRight,
  BsHeart,
  BsChat,
  BsUpload,
  BsBarChart,
} from 'react-icons/bs'

import placeholder from '../static/placeholder-image.png'
import logo from '../static/logo.png'

const Tweet = ({ tweet }) => {
  const {
    target = '<target>',
    character = '<character>',
    imgPreview,
    imgURL,
    body,
  } = tweet

  let updatedTweetBody
  let tweetContent
  if (body !== undefined) {
    updatedTweetBody = body
      .replace('<target>', target)
      .replace('<character>', character)

    tweetContent = updatedTweetBody.replaceAll('#', '%40')
  }

  const tweetURL = `https://twitter.com/intent/tweet?text=${tweetContent}%20${imgURL}`

  return (
    <div className='main-container'>
      <div className='tweet-card'>
        <div className='tweet-card-left'>
          <img src={logo} alt='Greenpeace Logo' />
        </div>
        <div className='tweet-card-right'>
          <div className='tweet-card-right-name'>
            <a href='/'>Greenpeace Canada</a> @GreenpeaceCA <a href='/'>2022</a>
          </div>
          {body === undefined ? (
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat mas
            </p>
          ) : (
            <p>{updatedTweetBody}</p>
          )}
          {imgPreview === undefined ? (
            <img src={placeholder} alt='placeholder image' />
          ) : (
            <img src={imgPreview} alt='character image' />
          )}
          <div className='tweet-card-right-actions'>
            <BsChat />
            <BsArrowLeftRight />
            <BsHeart />
            <BsUpload />
            <BsBarChart />
          </div>
        </div>
      </div>
      <Button href={tweetURL} />
    </div>
  )
}

export default Tweet
