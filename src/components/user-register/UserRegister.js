import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  registerUser
} from '../../actions/UsersActions';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.register = this.register.bind(this);
  }

  handleLoginChange(event) {
    this.setState({login: event.target.value});
  }

  handlePasswordChange(event) {
     this.setState({password: event.target.value});
  }

  register(event) {
    if (this.state && this.state.login && this.state.password) {
      event.preventDefault();
      this.props.registerUser(this.state.login, this.state.password);
    }
  }

  render() {
    return (
    	<div>
	      	<h1>Register</h1>
	        <form>
	          <input type="text" name="login" placeholder="Login" required onChange={this.handleLoginChange} />
	          <input type="password" name="password" placeholder="Password" required onChange={this.handlePasswordChange}/>
	          <button type="submit" onClick={this.register}>Register</button>
	        </form>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  login: state.user.login,
  logged: state.user.logged
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      registerUser
    },
    dispatch
  );

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Registration);