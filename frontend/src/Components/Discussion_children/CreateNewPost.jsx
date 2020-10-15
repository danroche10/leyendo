import React from "react";
import { Container } from "react-bootstrap";

//First child of Discussion.js

const CreateNewPost = props => {
  return (
    <>
      <Container>
        <section className="create-post">
          <form onSubmit={props.savePost}>
            <h1>Create New Post</h1>
            <textarea
              type="text"
              onChange={props.savePostTitleToState}
              placeholder="Name"
              size="39"
              required
              ref={props.getTitle}
            ></textarea>
            <br />
            <br />
            <textarea
              onChange={props.savePostContentToState}
              placeholder="Comment"
              rows="8"
              cols="10"
              required
              ref={props.getContent}
            ></textarea>
            <br />
            <br />
            <section className="button-wrapper">
              <button className="button">Save Post</button>
            </section>
          </form>
        </section>
      </Container>
    </>
  );
};
export default CreateNewPost;
