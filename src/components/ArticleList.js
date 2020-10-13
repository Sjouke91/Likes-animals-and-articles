// src/components/ArticleList.js
import React, { useState } from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articles, set_articles] = useState([
    {
      id: 1,
      title: "What is React all about?",
      body:
        "React is all about one-way data flow, the Virtual DOM, and transpiling JSX.",
    },
    {
      id: 2,
      title: "A lovely kid",
      body: "In fact, a kid is also the name of a baby goat!",
    },
    {
      id: 3,
      title: "On placeholder image URLs",
      body:
        "So yeah, you won't be able to look these images up. They're placeholders",
    },
  ]);

  function Delete() {
    set_articles(null);
  }

  if (articles === null) {
    return <button onClick={Delete}>Clear notifications</button>;
  } else {
    return (
      <div>
        <p>Here's a lovely list of articles, for your reading pleasure:</p>
        {articles.map((article) => {
          return (
            <div>
              <ArticleCard
                key={article.id}
                title={article.title}
                body={article.body}
              />
            </div>
          );
        })}
        <button onClick={Delete}>Clear notifications</button>
      </div>
    );
  }
}
