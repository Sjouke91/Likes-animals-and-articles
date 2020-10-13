import React from "react";
import "./App.css";
// import LikeCounter from "./components/LikeCounter";
// import LikeButton from "./components/LikeButton";
// import AwesomeAnimals from "./components/AwesomeAnimals";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      {/* <LikeCounter />
      <LikeButton />
      <AwesomeAnimals number={1} animal="chicken" /> */}
      <ArticleList />
    </div>
  );
}

export default App;
