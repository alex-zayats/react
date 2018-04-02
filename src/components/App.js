import React from 'react';
import { Route, Link } from 'react-router-dom';
import AddPost from './add-post/AddPost';
import ListPosts from './list-posts/ListPosts';
import Registration from './user-register/UserRegister';
import Login from './user-login/UserLogin';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/add-post">Add post</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={ListPosts} />
      <Route exact path="/add-post" component={AddPost} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
);

export default App;
