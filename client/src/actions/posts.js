import * as api from "../api";

// ACTIONS Creators
const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    const action = { type: "FETCH_ALL", payload: data };

    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    const action = { type: "CREATE", payload: data };

    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export { getPosts, createPost };
