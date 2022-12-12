import {
  BsArrowLeftRight,
  BsHeart,
  BsChat,
  BsUpload,
  BsBarChart,
  BsThreeDots,
} from 'react-icons/bs'

import placeholder from '../static/cbd-image.png'
import logo from '../static/tweet-logo.png'

const Tweet = ({ tweet, updatedTweetBody }) => {
  const { imgPreview, body } = tweet

  return (
    <>
      <div className='tweet-card'>
        <div className='card-heading'>
          <img src={logo} alt='Greenpeace logo' />
          <div className='heading-container'>
            <div className='heading-info'>
              <p className='twitter-name'>Your Name</p>
              <span className='twitter-handle'>@YourTwitterHandle</span>
            </div>
            <BsThreeDots />
          </div>
        </div>
        <div className='card-body'>
          {body === undefined ? (
            <p className='tweet-text'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          ) : (
            <p className='tweet-text'>{updatedTweetBody}</p>
          )}
          {imgPreview === undefined ? (
            <img
              src={placeholder}
              alt='placeholder image'
              className='tweet-image'
            />
          ) : (
            <img
              src={imgPreview}
              alt='character image'
              className='tweet-image'
            />
          )}

          <div className='tweet-card-actions'>
            <BsChat />
            <BsArrowLeftRight />
            <BsHeart />
            <BsUpload />
            <BsBarChart />
          </div>
        </div>
      </div>
    </>
  )
}

export default Tweet
