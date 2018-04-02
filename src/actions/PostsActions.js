export const POSTS_FETCHING = 'POSTS_FETCHING';
export const POSTS_FETCHED = 'POSTS_FETCHED';
export const POST_DELETED = 'POST_DELETED';
export const POST_ADDED = 'POST_ADDED';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const MONGO_URL = 'http://127.0.0.1:8080/';

export const fetchPosts = () => {
  return (dispatch, getState) => {
    dispatch({
      type: POSTS_FETCHING
    });
    
    return fetch(MONGO_URL + 'articles?offset=' + getState().posts.list.length)
      .then(response => response.json())
      .then(posts => dispatch({
          type: POSTS_FETCHED,
          posts
        })
      );
  }
};

export const changeFilter = (value) => (
  {
    type: CHANGE_FILTER,
    filterAuthor: value
  }
);

export const deletePost = (postId) => {
 return (dispatch) => {
    return fetch(MONGO_URL + 'articles/' + postId, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json'
      }
    })
      .then(response => dispatch({
          type: POST_DELETED
        })
      );
  }
};

export const addPost = (title, author, content) => {
 return (dispatch) => {
    return fetch(MONGO_URL + 'articles', {
      method: 'POST',
      body: JSON.stringify({ title, author, content }),
      headers: {
         'Content-Type': 'application/json'
      }
    })
      .then(response => dispatch({
          type: POST_ADDED
        })
      );
  }
};