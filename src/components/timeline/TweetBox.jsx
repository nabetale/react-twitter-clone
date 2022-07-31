import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase"

const TweetBox = () => {

  const [tweetMessage,setTweetMessage]=useState("");
  const [tweetImage,setTweetImage]=useState("");

  const sendTweet=(e)=>{
    e.preventDefault();

    addDoc(collection(db,"posts"),{
      displayName:"なべ",
      userName:"@nabeeee",
      verified:true,
      text:tweetMessage,
      avatar:"http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image:tweetImage,
      timeStamp:serverTimestamp(),
    })
    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className='tweetBox'>
      <form className='tweetBox__form'>
        <div className='tweetBox__input'>
          <Avatar />
          <input value={tweetMessage} type="text" placeholder='今何している？' onChange={(e)=>setTweetMessage(e.target.value)}/> 
        </div>
        <input value={tweetImage} type="text" placeholder='画像のURLを入力してください' className='tweetBox__imageInput' onChange={(e)=>setTweetImage(e.target.value)}/>
        <Button className='tweetBox__tweetButton' type='submit' onClick={sendTweet}>ツイートする</Button>
      </form>
    </div>
  )
}

export default TweetBox