import React, { useState, useEffect } from "react";
import "./App.css";
import { Row, Container } from "react-bootstrap";
import axios from "axios";
import DataContext from "./Components/Contexts/DataContext";
import Data2Context from "./Components/Contexts/Data2Context";
import { TopicContext } from "./Components/Contexts/TopicContext";
import { AuthorContext } from "./Components/Contexts/AuthorContext";
import { EssayContext } from "./Components/Contexts/EssayContext";
import TopicList from "./Components/TopicList";
import AuthorList from "./Components/AuthorList";
import EssayList from "./Components/EssayList";
import Discussion from "./Components/Discussion";
import isCreateNewPostContext from "./Components/Contexts/isCreateNewPostContext";

//App has four children: TopicList, AuthorList, EssayList and Discussion

const App = () => {
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result2 = await axios("/comment");
      const result = await axios("/essays");

      setData2(result2.data);
      setData(result.data);
    };

    fetchData();
  }, [data2]);

  //States
  const [data, setData] = useState([]); // essay data
  // comment data
  const [topic, setTopic] = useState();
  const [author, setAuthor] = useState();
  const [essay, setEssay] = useState();
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);

  return (
    <>
      <Container>
        <div className="hello">Leyendo</div>
        <div className="hello2">Making the World Smarter.</div>
        <Row md={4} className="justify-content-md-center">
          <DataContext.Provider value={{ data }}>
            <TopicContext.Provider value={[topic, setTopic]}>
              <AuthorContext.Provider value={[author, setAuthor]}>
                <EssayContext.Provider value={[essay, setEssay]}>
                  <isCreateNewPostContext.Provider
                    value={[isCreateNewPost, setIsCreateNewPost]}
                  >
                    <TopicList />
                    <AuthorList />
                    <EssayList />
                  </isCreateNewPostContext.Provider>
                </EssayContext.Provider>
              </AuthorContext.Provider>
            </TopicContext.Provider>
          </DataContext.Provider>
        </Row>
        <Row>
          <DataContext.Provider value={{ data }}>
            <TopicContext.Provider value={[topic, setTopic]}>
              <AuthorContext.Provider value={[author, setAuthor]}>
                <EssayContext.Provider value={[essay, setEssay]}>
                  <Data2Context.Provider value={[data2, setData2]}>
                    <isCreateNewPostContext.Provider
                      value={[isCreateNewPost, setIsCreateNewPost]}
                    >
                      <Discussion />
                    </isCreateNewPostContext.Provider>
                  </Data2Context.Provider>
                </EssayContext.Provider>
              </AuthorContext.Provider>
            </TopicContext.Provider>
          </DataContext.Provider>
        </Row>
      </Container>
    </>
  );
};

export default App;
