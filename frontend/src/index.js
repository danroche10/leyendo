import TopicList from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <TopicList />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
