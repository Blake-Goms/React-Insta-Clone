import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthentication';
import LoginPage from './components/Login/LoginPage';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

class App extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <ComponentFromWithAuthenticate />
    );
  }
}

export default App;