import React, { useContext, useState, useRef } from "react";
import Data2Context from "./Contexts/Data2Context";
import DataContext from "./Contexts/DataContext";
import isCreateNewPostContext from "./Contexts/isCreateNewPostContext";
import { TopicContext } from "./Contexts/TopicContext";
import { EssayContext } from "./Contexts/EssayContext";
import Post from "./Discussion_children/Post";
import CreateNewPost from "./Discussion_children/CreateNewPost";
import { Row, Col, Container } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import { AuthorContext } from "./Contexts/AuthorContext";
import { TitleContext } from "./Contexts/TitleContext";
import { ContentContext } from "./Contexts/ContentContext";
import axios from "axios";

//Discussion has two children: "./Discussion_children/CreateNewPost" and "./Discussion_children/Post"

const Discussion = () => {
  const [topic, setTopic] = useContext(TopicContext);
  const [author, setAuthor] = useContext(AuthorContext);
  const [essay, setEssay] = useContext(EssayContext);

  const { data } = useContext(DataContext);
  const [data2, setData2] = useContext(Data2Context);
  const getTitle = useRef();
  const getContent = useRef();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isCreateNewPost, setIsCreateNewPost] = useContext(
    isCreateNewPostContext
  );

  const filtery = data.filter(
    x => x.title === essay && x.topic === topic && x.author === author
  );
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  const updateStatus4 = e => {
    e.preventDefault();
  };

  const createPost = (
    <section className="button-wrapper">
      <button onClick={toggleCreateNewPost} className="button">
        Post
      </button>
    </section>
  );

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };

  const savePostContentToState = event => {
    setContent(event.target.value);
  };

  const savePost = event => {
    event.preventDefault();
    setTitle("");
    setContent("");
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
    const data = {
      author: title,
      content: content,
      essay: essay,
      essayAuthor: author,
      topic: topic
    };

    axios
      .post("/comment", data)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
        />
      </>
    );
  }

  console.log(isCreateNewPost);
  return (
    <isCreateNewPostContext.Provider
      value={[isCreateNewPost, setIsCreateNewPost]}
    >
      <TitleContext.Provider value={[title, setTitle]}>
        <ContentContext.Provider value={[content, setContent]}>
          <Container className="posts-container">
            {!data.filter(
              x => x.author === author && x.topic === topic && x.title === essay
            ).length ? (
              <div>
                <br></br>
                <br></br>
                <div className="title">Recent Posts</div>
                <section className="all-post">
                  {data2

                    .slice(-5)
                    .reverse()
                    .map(eachPost => {
                      return (
                        <Post
                          key={eachPost._id}
                          title={eachPost.author}
                          content={eachPost.content}
                          essay={eachPost.essay}
                          created_date={eachPost.created_date}
                          topic={eachPost.topic}
                          essayAuthor={eachPost.essayAuthor}
                        />
                      );
                    })}
                  <br></br>
                  <br></br>
                </section>
              </div>
            ) : !data2.filter(x => x.essay === essay).length ? (
              <div className="read">
                <span>Read--> </span>
                <ExternalLink
                  href={data
                    .filter(x => x.title === essay)
                    .map(value => value.link)}
                >
                  <button>
                    {filtery.map(value => value.title)}
                    <span>, </span>

                    {filtery.map(value => value.year)}
                  </button>
                  <br></br>
                </ExternalLink>
                <br></br>
                <h4 className="title">Be the first to Comment!</h4>
                {createPost}
              </div>
            ) : (
              <div className="read">
                <div>
                  <span>Read--> </span>
                  <ExternalLink
                    href={data
                      .filter(x => x.title === essay)
                      .map(value => value.link)}
                  >
                    <button>
                      {filtery.map(value => value.title)}
                      <span>, </span>

                      {filtery.map(value => value.year)}
                    </button>
                    <br></br>
                  </ExternalLink>

                  <br></br>
                </div>
                <h4 className="title">Discussion</h4>
                <section className="all-post">
                  {data2
                    .filter(x => x.essay === essay)
                    .map(eachPost => {
                      return (
                        <Post
                          key={eachPost._id}
                          title={eachPost.author}
                          content={eachPost.content}
                          essay={eachPost.essay}
                          created_date={eachPost.created_date}
                          topic={eachPost.topic}
                          essayAuthor={eachPost.essayAuthor}
                        />
                      );
                    })}

                  {createPost}
                  <br></br>
                  <br></br>
                </section>
              </div>
            )}
          </Container>
        </ContentContext.Provider>
      </TitleContext.Provider>
    </isCreateNewPostContext.Provider>
  );
};

export default Discussion;
