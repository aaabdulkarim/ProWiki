/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import Login from './components/Profile/Login';
import { Router, Routes, Route } from "@solidjs/router"; 
import Profile from './components/Profile/Profile';
import ArticleSearch from './components/Articles/ArticleSearch';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => 
  <Router> 
      <Routes>
        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/articles/:id" component={ArticleSearch} />
      </Routes>
  </Router>
, root);
