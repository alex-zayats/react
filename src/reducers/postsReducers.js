export const POSTS_FETCHING = 'POSTS_FETCHING';
export const POSTS_FETCHED = 'POSTS_FETCHED';
export const POST_DELETED = 'POST_DELETED';
export const POST_ADDED = 'POST_ADDED';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const initialState = {
  list: [],
  fetching: false,
  filterAuthor: '',
  title: '',
  author: '',
  content: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCHING:
      return {
        ...state,
        fetching: true
      };

    case POSTS_FETCHED:
      return {
        ...state,
        fetching: false,
        list: state.list.concat(action.posts)
      };

    case CHANGE_FILTER:
      return {
        ...state,
        filterAuthor: action.filterAuthor
      };

    case POST_DELETED:
    case POST_ADDED:
      return {
        ...state
      };

    default:
      return state;
  }
};