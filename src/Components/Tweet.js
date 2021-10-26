import React from 'react';
import '../Styles/Tweet.css';
import Likes from './Likes.js';
import Retweets from './Retweet.js';

const Tweet = (props) => {
    return (
        <div class = "Tweet">
            <div class = "Info">
                <div class = "Author">{props.author}</div>
                <div class = "User">@{props.username}</div>
                <div class = "Date">- {props.date}</div>
            </div>
            <div class = "Content">{props.content}</div>
            <div class = "Buttons">
            <div class = "LikeButton">
            <Likes />  
            </div>
            <div class = "RetweetButton">
            <Retweets />
            </div>
            </div>
        </div>
    )
}

export default Tweet;
