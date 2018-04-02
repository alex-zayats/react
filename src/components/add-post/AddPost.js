import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  addPost
} from '../../actions/PostsActions';

class AddPost extends React.Component {
    constructor(props) {
    super(props);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleAuthorChange(event) {
     this.setState({author: event.target.value});
  }

  handleContentChange(event) {
     this.setState({content: event.target.value});
  }

  addPost(event) {
    if (this.state && this.state.title && this.state.author && this.state.content) {
      event.preventDefault();
      this.props.addPost(this.state.title, this.state.author, this.state.content);
    }
  }

  render() {
    return (
    	<div>
	      	<h1>Add post</h1>
	        <form>
	          <input type="text" name="login" placeholder="Title" onChange={this.handleTitleChange} />
	          <input type="text" name="author" placeholder="Author" onChange={this.handleAuthorChange}/>
            <textarea name="content" placeholder="Content" onChange={this.handleContentChange}/>
	          <button type="button" onClick={this.addPost}>Add</button>
	        </form>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.posts.title,
  author: state.posts.author,
  content: state.posts.content
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPost
    },
    dispatch
  );

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddPost);
