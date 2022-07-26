import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import "./Widgets.css"
const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <Search className='widgets__searchIcon' />
        <input type="text" placeholder='キーワード検索' />
      </div>
      <div className='widgets__widgetContainer'>
        <p className='widgets__currentTweet '>今どうしてる？</p>
        <TwitterTweetEmbed tweetId={'1551493528580390912'}/>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="RRReol"
          options={{height: 400}}
        />
        <TwitterShareButton
          url={'https://twitter.com/RRReol'}
          options={{ text: '#react.js勉強', via: 'nabeeee' }}
        />
      </div>
    </div>
  )
}

export default Widgets