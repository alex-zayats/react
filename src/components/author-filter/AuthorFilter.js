import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  changeFilter
} from '../../actions/PostsActions';


class AuthorFilter extends React.Component {
  constructor(props) {
    super(props);

    this.changeAuthorFilter = this.changeAuthorFilter.bind(this);
  }

  changeAuthorFilter(event) {
    this.props.changeFilter(event.target.value);
  }

  render() {
    return (
        <div>
          <span>Author filter</span> 
          <input type="text" onChange={this.changeAuthorFilter}/>
        </div>
    )
  }
} 

const mapStateToProps = state => ({
  filterAuthor: state.posts.filterAuthor
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeFilter
    },
    dispatch
  );

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AuthorFilter);
