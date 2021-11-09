import React, { useState } from 'react';
import unlike from '../Components/twitterUnlike.png';
import '../Styles/Likes.css';
import like from '../Components/twitterLike.png';

const Likes = () => {
    const [bool, setBool] = useState(true);
    const [count, setCount] = useState(0);
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
                increaseCount()
            }}><img src={unlike} alt="Twitter Unlike" className = "unlike" /> <div className="likeCount"><p>{count}</p></div> </div> : <div onClick={() => {
                if (bool===false) {
                setBool(true);
                }
                decreaseCount()
            }}><img src={like} alt="Twitter Like" className = "like"/><div className="likeCount"><p>{count}</p></div> </div>}

        </div>
    );
};

export default Likes;