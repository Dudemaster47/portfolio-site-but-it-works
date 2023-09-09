import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import nav from './components/nav';
import about_me from './components/about_me';
import feedback from './components/feedback';
import project_links from './components/project_links';
import skills from './components/skills';
import socials from './components/socials';
import splash from './components/splash';

function App() {
  return (
    <BrowserRouter>
      <nav />
      <Switch>
        <Route path="/aboutme">
          <about_me />
        </Route>
        <Route path="/feedback">
          <feedback />
        </Route>
        <Route path="/projects">
          <project_links />
        </Route>
        <Route path="/skills">
          <skills />
        </Route>
        <Route path="/socials">
          <socials />
        </Route>
        <Route path="/">
          <splash />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
