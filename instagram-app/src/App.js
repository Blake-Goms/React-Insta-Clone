import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthentication';
import LoginPage from './components/Login/LoginPage';
import styled, { css } from 'styled-components'


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

const AppDiv = styled.div`
max-width: 700px;
margin: 0 auto;
font-weight: 400;
`;


class App extends React.Component {
  render() {
    return (
      <AppDiv>
      <ComponentFromWithAuthenticate />
      </AppDiv>
    );
  }
}

export default App;

//future note: Remember we used NPM for this project