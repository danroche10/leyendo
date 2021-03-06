import React, { useContext } from "react";
import DataContext from "./Contexts/DataContext";
import { TopicContext } from "./Contexts/TopicContext";
import isCreateNewPostContext from "./Contexts/isCreateNewPostContext";
import { Row, Col } from "react-bootstrap";
import { AuthorContext } from "./Contexts/AuthorContext";

const TopicList = () => {
  const { data } = useContext(DataContext);
  const [topic, setTopic] = useContext(TopicContext);
  const [isCreateNewPost, setIsCreateNewPost] = useContext(
    isCreateNewPostContext
  );
  const [author, setAuthor] = useContext(AuthorContext);

  const updateTopic = e => {
    e.preventDefault();
  };

  const handleOnClick = name => {
    setTopic(name);
    setIsCreateNewPost(false);
    setAuthor(null);
  };
  return (
    <Col>
      <ul>
        {[...new Set(data.map(q => q.topic))].sort().map((name, i) => (
          <Row className="test">
            <button
              className="button1"
              key={i}
              onClick={() => handleOnClick(name)}
            >
              {name}
            </button>
          </Row>
        ))}
      </ul>
    </Col>
  );
};

export default TopicList;
