import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

import Home from './pages/Home';
import Article01 from './pages/Article01';
import Article02 from './pages/Article02';
import Article03 from './pages/Article03';
import Article04 from './pages/Article04';
import Article05 from './pages/Article05';
import Article06 from './pages/Article06';

import Article10 from './pages/Article10';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/article_01" element={<Article01 />}/>
          <Route path="/article_02" element={<Article02 />}/>
          <Route path="/article_03" element={<Article03 />}/>
          <Route path="/article_04" element={<Article04 />}/>
          <Route path="/article_05" element={<Article05 />}/>
          <Route path="/article_06" element={<Article06 />}/>

          <Route path="/article_10" element={<Article10 />}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
