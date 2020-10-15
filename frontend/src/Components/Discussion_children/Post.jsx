import React from "react";
import "./blogStyle.css";
import Moment from "react-moment";

//Second child of Discussion.js

const Post = props => {
  return (
    <>
      <section className="post-container">
        <div className="post-Name">{props.title}</div>

        <div className="post-Name2">
          <Moment format="DD/MM/YYYY">{props.created_date}</Moment>
        </div>
        <div className="post-Essay">
          {props.topic} > {props.essayAuthor} > {props.essay}
        </div>

        <p className="post-content"> {props.content}</p>
      </section>
    </>
  );
};
export default Post;
