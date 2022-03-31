import React from "react";

import useStyles from "./styles";
import Post from "./Post/Post.js";

const Posts = () => {
  const classes = useStyles();

  return (
    <>
      <h1>Posts</h1>
      <Post />
    </>
  );
};

export default Posts;
