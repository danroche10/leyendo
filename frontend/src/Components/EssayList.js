import React, { useContext, useState } from "react";
import DataContext from "./Contexts/DataContext";
import { TopicContext } from "./Contexts/TopicContext";
import { AuthorContext } from "./Contexts/AuthorContext";
import { EssayContext } from "./Contexts/EssayContext";
import isCreateNewPostContext from "./Contexts/isCreateNewPostContext";
import { Row, Col } from "react-bootstrap";

const EssayList = () => {
  const { data } = useContext(DataContext);
  const [topic, setTopic] = useContext(TopicContext);
  const [author, setAuthor] = useContext(AuthorContext);
  const [essay, setEssay] = useContext(EssayContext);
  const [isCreateNewPost, setIsCreateNewPost] = useContext(
    isCreateNewPostContext
  );

  const truncate = input =>
    input.length > 38 ? `${input.substring(0, 36)}...` : input;

  const updateEssay = e => {
    e.preventDefault();
    setIsCreateNewPost(false);
  };

  const handleOnClick = name => {
    setEssay(name);
    setIsCreateNewPost(false);
  };

  console.log(isCreateNewPost);

  return (
    <isCreateNewPostContext.Provider
      value={[isCreateNewPost, setIsCreateNewPost]}
    >
      <Col>
        <ul>
          {!data.filter(x => x.author === author && x.topic === topic)
            .length ? (
            <div className="no-post">
              <h5 className="pick">Choose an Author!</h5>
            </div>
          ) : (
            data
              .filter(x => x.author === author && x.topic === topic)
              .map(value => value.title)
              .map(name => (
                <Row className="test">
                  <button
                    type="button"
                    className="button3"
                    key={name.toString()}
                    onClick={() => handleOnClick(name)}
                  >
                    {truncate(name)}
                  </button>
                </Row>
              ))
          )}
        </ul>
      </Col>
    </isCreateNewPostContext.Provider>
  );
};

export default EssayList;
