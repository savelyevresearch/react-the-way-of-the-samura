import React from 'react';

import postStyleClasses from './Post.module.css';

const Post = (props) => {
  return (
    <div className={postStyleClasses.item}>
        <img src='https://cdn1.iconfinder.com/data/icons/marketing-19/100/Profile-512.png' alt='User Avatar'/>
        {props.message}
        <div>
            <span>{`Like count: ${props.likeCount}`}</span>
            <span>Like</span>
        </div>
    </div>
  );
};

export default Post;