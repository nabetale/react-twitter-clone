import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* twitterアイコン */}
      <TwitterIcon  className='sidebar__twitterIcon'/>
      {/* Sidebar option */}
      <SidebarOption Icon={HomeIcon} text="ホーム" active/>
      <SidebarOption Icon={SearchIcon} text="話題を検索" />
      <SidebarOption Icon={MailOutlineIcon} text="通知" />
      <SidebarOption Icon={NotificationsNoneIcon} text="メッセージ" />
      <SidebarOption Icon={BookmarkBorderIcon} text="ブックマーク" />
      <SidebarOption Icon={ListAltIcon} text="リスト" />
      <SidebarOption Icon={PermIdentityIcon} text="プロフィール" />
      <SidebarOption Icon={MoreHorizIcon} text="もっと見る" />
      {/* tweetボタン */}
      <Button variant='outlined' className='sidebar__tweet' fullWidth>ツイートする</Button>
    </div>
  )
}

export default Sidebar
