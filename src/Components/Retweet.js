import React, { useState } from 'react';
import unretweet from '../Components/unretweet.png';
import '../Styles/Retweet.css';
import retweet from '../Components/retweet.png';

const Retweets = () => {
    const [bool, setBool] = useState(false);
    const [count, setCount] = useState(1);
    const increaseCount = () => {
        setCount(count+1);
    }
    const decreaseCount = () => {
        setCount(count-1);
    }
    return (
        <div>

            {bool ? <div onClick={() => {
                if (bool===true) {
                setBool(false);
                }
                increaseCount();
            }}><img src={unretweet} alt="Twitter Unretweet" className = "unretweet" /><div className="retweetCount"><p>{count}</p></div> </div> : <div onClick={() => {
                if (bool===false) {
                setBool(true);
                }
                decreaseCount();
            }}><img src={retweet} alt="Twitter Retweet" className = "retweet"/><div className="retweetCount"><p>{count}</p></div> </div>}
        </div>
    );
};

export default Retweets;