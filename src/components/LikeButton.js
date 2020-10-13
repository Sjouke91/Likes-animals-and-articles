import React, { useState } from "react";

export default function LikeButton() {
  //   console.log("this works");
  const [numLikes, set_NumLikes] = useState(0);
  const [numDislikes, set_NumDislikes] = useState(0);
  const [DoLike, set_DoLike] = useState("like this content");

  function doesLike() {
    console.log(DoLike);
    if (DoLike === "like this content" || DoLike === "Not liked") {
      set_NumLikes(numLikes + 1);
      set_DoLike("Liked");
    } else if (DoLike === "Liked") {
      set_DoLike("Not liked");
      set_NumDislikes(numDislikes + 1);
    }
  }

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes and <b>{numDislikes}</b> dislikes!
        <button onClick={doesLike}>{DoLike}</button>
      </p>
    </div>
  );
}
