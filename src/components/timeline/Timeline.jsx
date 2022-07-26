import React from 'react';
import Post from './Post';
import "./Timeline.css"
import TweetBox from './TweetBox';

const Timeline = () => {
  return (
    <div className='timeline'>
      {/* header */}
      <div className='timeline__header'>
        <p>ホーム</p>
      </div>
      {/* tweetbox */}
      <TweetBox/>
      {/* post */}
      <Post/>
      <Post/>
    </div>
  )
}

export default Timeline