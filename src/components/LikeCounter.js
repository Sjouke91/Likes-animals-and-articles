import React, { useState } from "react";

export default function LikeCounter() {
  const [numLikes, set_NumLikes] = useState(0);
  const [numDislikes, set_NumDislikes] = useState(0);

  function addLike() {
    console.log("add one");
    set_NumLikes(numLikes + 1);
  }
  function subtractLike() {
    console.log("subtract one");
    set_NumDislikes(numDislikes + 1);
  }
  function reset() {
    console.log("reset");
    set_NumLikes(0);
    set_NumDislikes(0);
  }

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes and <b>{numDislikes}</b> dislikes!
        <button onClick={addLike}>I Like this!</button>
        <button onClick={subtractLike}>I don't!</button>
        <button onClick={reset}>reset!</button>
      </p>
    </div>
  );
}
