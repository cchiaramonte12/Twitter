import React, {useState, useEffect}from 'react';
import '../Styles/Tweet.css';
import Likes from './Likes.js';
import Retweets from './Retweet.js';
import axios from 'axios';


const Tweet = (props) => {

    let [agePrediction, setAgePrediction] = useState(0);

    let name = props.author;
    useEffect(() => {
      axios.get('https://api.agify.io/?name='+name).then(prediction => {
        setAgePrediction(prediction.data.age);
      });
    }, []);

    return (
        <div class = "Tweet">
            <div class = "Info">
                <div class = "Author">{props.author}</div>
                <div class = "User">@{props.username}</div>
                <div class = "Date">- {props.date} </div>
                <div class = "Age"> - Estimated Age: ({agePrediction})</div>
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
