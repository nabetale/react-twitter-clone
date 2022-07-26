import { Avatar, Button } from '@mui/material'
import React from 'react'
import "./TweetBox.css"

const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form className='tweetBox__form'>
        <div className='tweetBox__input'>
          <Avatar />
          <input type="text" placeholder='今何している？' /> 
        </div>
        <input type="text" placeholder='画像のURLを入力してください' className='tweetBox__imageInput'/>
        <Button className='tweetBox__tweetButton' type='submit'>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox