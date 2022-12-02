import React from 'react';

import postStyleClasses from './Post.module.css';

const Post = (props) => {
  return (
    <div className={postStyleClasses.item}>
        <img src={props.userAvatarUrl} alt={props.userAvatarAlt}/>
        {props.message}
        <div>
            <span>{`Like count: ${props.likeCount}`}</span>
            <span>Like</span>
        </div>
    </div>
  );
};

export default Post;