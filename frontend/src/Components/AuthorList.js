import React, { useContext, useState } from "react";
import DataContext from "./Contexts/DataContext";
import { TopicContext } from "./Contexts/TopicContext";
import { AuthorContext } from "./Contexts/AuthorContext";
import isCreateNewPostContext from "./Contexts/isCreateNewPostContext";
import { EssayContext } from "./Contexts/EssayContext";

import { Row, Col } from "react-bootstrap";

const AuthorList = () => {
  const { data } = useContext(DataContext);
  const [topic, setTopic] = useContext(TopicContext);
  const [author, setAuthor] = useContext(AuthorContext);
  const [isCreateNewPost, setIsCreateNewPost] = useContext(
    isCreateNewPostContext
  );
  const [essay, setEssay] = useContext(EssayContext);

  const updateAuthor = e => {
    e.preventDefault();
  };

  const handleOnClick = name => {
    setAuthor(name);
    setIsCreateNewPost(false);
    setEssay(null);
  };

  return (
    <Col>
      <ul>
        {!data.filter(x => x.topic === topic).length ? (
          <h4 className="pick">Choose a topic!</h4>
        ) : (
          data
            .filter(x => x.topic === topic)
            .map(value => value.author)
            .filter((author, index, arr) => arr.indexOf(author) === index)
            .map(name => (
              <Row className="test">
                <button
                  className="button2"
                  key={name}
                  onClick={() => handleOnClick(name)}
                >
                  {name}
                </button>
              </Row>
            ))
        )}
      </ul>
    </Col>
  );
};

export default AuthorList;
