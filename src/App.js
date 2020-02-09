import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import Navigation from './components/navigation';
import Home from './components/panels/home';
import Profile from './components/panels/profile';
import Resume from './components/panels/resume';
import Blog from './components/panels/blog';
import PostGirlsWhoCode from './components/blogPosts/post_girlswhocode'
import Projects from './components/panels/projects';

function App() {
  return (
    <div className="top_60 container">
      <div className="row">
        <div className="col-lg-3 col-md-5">
          <Profile />
        </div>

        <div id="ajax-tab-container" className="col-lg-9 col-md-7 tab-container"
        data-easytabs="true">
          <Navigation />
            <div id="content" className="panel-container bottom_30">
              <Router>
                <Route path="/" exact component={Home} />
                <Route path="/resume" component={Resume} />
                <Route path="/projects" component={Projects} />
                <Route path="/blog" component={Blog} />
                <Route path="/post_girlswhocode" component={PostGirlsWhoCode} />
              </Router>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
