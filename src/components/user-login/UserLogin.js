import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  loginUser
} from '../../actions/UsersActions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleLoginChange(event) {
    this.setState({login: event.target.value});
  }

  handlePasswordChange(event) {
     this.setState({password: event.target.value});
  }

  login(event) {
    if (this.state && this.state.login && this.state.password) {
      event.preventDefault();
      this.props.loginUser(this.state.login, this.state.password);
    }
  }

  render() {
    return (
    	<div>
	      	<h1>Login</h1>
	        <form>
	          <input type="text" name="login" placeholder="Login" required onChange={this.handleLoginChange} />
	          <input type="password" name="password" placeholder="Password" required onChange={this.handlePasswordChange}/>
	          <button type="submit" onClick={this.login}>Login</button>
            <p style={{color: 'green', display: this.props.logged ? 'block' : 'none' }}>Successfully logged</p>
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
      loginUser
    },
    dispatch
  );

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);