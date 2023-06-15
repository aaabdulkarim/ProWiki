/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import Login from './components/Profile/Login';
import { Router, Routes, Route } from "@solidjs/router"; 
import Profile from './components/Profile/Profile';
import Article from './components/Articles/Article';
import Header from './components/Header';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => 
  <Router> 
      <Header></Header>
      <Routes>

        <Route path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/article/:id" component={Article} />

      </Routes>
  </Router>
, root);
