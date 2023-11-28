import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Nav from './components/nav';
import AboutMe from './components/about_me';
import {Feedback} from './components/feedback';
import ProjectLinks from './components/project_links';
import Skills from './components/skills';
import Splash from './components/splash';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/aboutme" element={<AboutMe />}/>
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/projects" element={<ProjectLinks />} />
        <Route path="/skills" element={<Skills />} />
        <Route exact path="/" element={<Splash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
