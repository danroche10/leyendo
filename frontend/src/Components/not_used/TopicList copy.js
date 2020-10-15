/*import React, { useState, useEffect, useRef } from "react";
import CreateNewPost from "./Blog/CreateNewPost";
import Post from "./Blog/Post";
import ModifyPost from "./Blog/ModifyPost";
import "./App.css";
//import Flexbox from "flexbox-react";
import { Row, Col, Container } from "react-bootstrap";
import { ExternalLink } from "react-external-link";
import axios from "axios";

const TopicList = () => {
  useEffect(() => {
    const fetchData = async () => {
      const result2 = await axios("http://localhost:4000/comment");
      const result = await axios("http://localhost:4000/players");

      setData2(result2.data);
      setData(result.data);
    };

    fetchData();
  }, []);

  //States
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [status, setStatus] = useState();
  const [status2, setStatus2] = useState();
  const [status3, setStatus3] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);

  const hello = [...new Set(data.map(q => q.topic))].sort();
  const essay = status3;

  console.log(data.length);
  //console.log(content);

  // Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  const filtery = data.filter(
    x => x.title === status3 && x.topic === status && x.author === status2
  );

  const savePostTitleToState = event => {
    setTitle(event.target.value);
  };
  const savePostContentToState = event => {
    setContent(event.target.value);
  };
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const savePost = event => {
    event.preventDefault();

    // setAllPosts([...allPosts, { title, content, essay }]);
    //console.log(allPosts[allPosts.length - 1]);
    setTitle("");
    setContent("");
    getTitle.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
    const data = { author: title, content: content, essay: essay };

    axios
      .post("http://localhost:4000/comment", data)
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
          // deletePost={deletePost}
        />
      </>
    );
  } else if (isModifyPost) {
    return <ModifyPost />;
  }

  return (
    <>
      <Container>
       <h1 className="hello">Leyendo</h1>
        <Row md={4} className="justify-content-md-center">
          <Col>
            <ul>
              {hello.map((name, i) => (
                <button
                  className="button1"
                  key={i}
                  onClick={() => setStatus(name)}
                >
                  {name}
                </button>
              ))}
            </ul>
          </Col>
          <Col>
            <ul>
              {!data.filter(x => x.topic === status).length ? (
                <section className="no-post">
                  <h3>Choose a topic!</h3>
                </section>
              ) : (
                data
                  .filter(x => x.topic === status)
                  .map(value => value.author)
                  .filter((author, index, arr) => arr.indexOf(author) === index)
                  .map(name => (
                    <button
                      className="button1"
                      key={name}
                      onClick={() => setStatus2(name)}
                    >
                      {name}
                    </button>
                  ))
              )}
            </ul>
          </Col>

          <Col>
            <ul>
              {!data.filter(x => x.author === status2 && x.topic === status)
                .length ? (
                <section className="no-post">
                  <h3>Choose an Author!</h3>
                </section>
              ) : (
                data
                  .filter(x => x.author === status2 && x.topic === status)
                  .map(value => value.title)
                  .map(name => (
                    <button
                      className="button1"
                      key={name.toString()}
                      onClick={() => setStatus3(name)}
                    >
                      {name}
                    </button>
                  ))
              )}
            </ul>
          </Col>
        </Row>

        <ul className="dan">
          <li>
            <ExternalLink
              href={data
                .filter(x => x.title === status3)
                .map(value => value.link)}
            >
              <span>{filtery.map(value => value.title)}</span>
            </ExternalLink>
          </li>
          <li>{filtery.map(value => value.year)}</li>
        </ul>
        <Container>
          {!data.filter(
            x =>
              x.author === status2 && x.topic === status && x.title === status3
          ).length ? (
            <section className="no-post">
              <br></br>
              <h1>Choose an essay!</h1>
              <h3>There is nothing to see here.</h3>

              <br />
            </section>
          ) : (
            <div>
              <h1>All Posts</h1>
              <section className="all-post">
                {data2
                  .filter(x => x.essay === status3)
                  .map(eachPost => {
                    return (
                      <Post
                        key={eachPost._id}
                        title={eachPost.author}
                        content={eachPost.content}
                        essay={eachPost.essay}
                      />
                    );
                  })}

                <section className="button-wrapper">
                  <button onClick={toggleCreateNewPost} className="button">
                    Create New
                  </button>
                </section>
              </section>
            </div>
          )}
        </Container>
      </Container>
    </>
  );
};

export default TopicList;
*/
