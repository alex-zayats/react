import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  fetchPosts,
  deletePost
} from '../../actions/PostsActions';
import AuthorFilter from '../author-filter/AuthorFilter';

class ListPosts extends React.Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
  }

  deletePost(event) {
     this.props.deletePost(event.target.dataset.postId);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <AuthorFilter/>
        <div>
        {
          this.props.posts
            .filter((post) => (
                post.title.includes(this.props.filterAuthor)
              ))
            .map((post, index) => (
              <div key={index}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <span>{post.date}</span>
                <span>{post.author}</span>
                <a href="#" style={{display: this.props.logged ? 'block' : 'none' }} onClick={this.deletePost} data-post-id={post._id}>Delete post</a>
              </div>
              ))
        }
        </div>
        <p>
         <button onClick={this.props.fetchPosts} disabled={this.props.fetching}>
           Load news
         </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list,
  fetching: state.posts.fetching,
  filterAuthor: state.posts.filterAuthor,
  logged: state.user.logged
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPosts,
      deletePost
    },
    dispatch
  );

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ListPosts);
