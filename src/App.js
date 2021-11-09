/* Author: Cameron Chiaramonte */
import React, { useEffect, useState } from 'react';
import Body from './Components/Body.js';
import Header from './Components/Header.js';
import Tweet from './Components/Tweet.js';
import './Styles/App.css';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from './Components/Profile.js';
import Likes from './Components/Likes.js';
import Retweets from './Components/Retweet.js';
import firestore from "./firebase";
import {collection, getDocs} from "firebase/firestore/lite";




function App() {
  let [author, setAuthor] = useState("");
  let [date, setDate] = useState("");
  let [content, setContent] = useState("");
  const [tweet, setTweet] = useState([
    {
      content: "This is my first tweet",
      author: "Cameron",
      username: "cchiaramonte",
      date: "September 26th",
      likes: <Likes />,
      retweets: <Retweets />,
      agePrediction: "21"
    }
  ]);
  let [username, setUsername] = useState("");
  let [keyword, setKeyword] = useState("");

  useEffect(() => {
    let tweets = collection(firestore, "Tweets");
    getDocs(tweets).then(snapshot => {
      let tempTweets = [];
      snapshot.forEach(document => {
        tempTweets.push(document.data());
      });
      setTweet(tempTweets);
      console.log(tempTweets);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">

      <Header />
      <div>
        <div className = 'profileLink'>
          <Link to="/profile">Profile Page</Link>
          </div>
      <div>
      <div className = 'filter'>
        Filter Tweets: 
          <input value={keyword} onChange = {e => setKeyword(e.target.value)}/>
        </div>
      <h3>Create New Tweet</h3>
      <div className = "inputs">
      Author: 
      <input value={author} onChange={e => setAuthor(e.target.value)} />
      Username: 
      <input value={username} onChange={e => setUsername(e.target.value)} />
      Date: 
      <input value={date} onChange={e => setDate(e.target.value)} />
      Tweet: 
      <input value={content} onChange={e => setContent(e.target.value)} />
      <button
        onClick={() =>
          setTweet([...tweet, {author: author, username: username, date: date, content: content}])
        }
        >
          Submit!
        </button>
        </div>
        
        <div>
          {tweet.filter(tweet => tweet.content.toLowerCase().includes(keyword)).map(tweet => (
            <div className = "output">
              <Tweet author={tweet.author} username={tweet.username} date = {tweet.date} content = {tweet.content} />
            </div>
          ))}
        </div>
          
      <Body />

         </div>
        </div>
      </Route>
      </Switch>   
    </Router>          
  );
}

export default App;
