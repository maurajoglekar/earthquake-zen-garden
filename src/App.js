import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
  position: fixed;
  top: 100px;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <StyledDiv id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/quake/:code" component={DetailPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </StyledDiv>
        </div>
      </Router>
    );
  }
}

export default App;