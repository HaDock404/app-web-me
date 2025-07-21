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

import Article08 from './pages/Article08';

import Article10 from './pages/Article10';
import Article11 from './pages/Article11';
import Article12 from './pages/Article12';
import Article13 from './pages/Article13';

import Article15 from './pages/Article15';
import Article16 from './pages/Article16';
import Article17 from './pages/Article17';
import Article18 from './pages/Article18';

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

          <Route path="/article_08" element={<Article08 />}/>

          <Route path="/article_10" element={<Article10 />}/>
          <Route path="/article_11" element={<Article11 />}/>
          <Route path="/article_12" element={<Article12 />}/>
          <Route path="/article_13" element={<Article13 />}/>

          <Route path="/article_15" element={<Article15 />}/>
          <Route path="/article_16" element={<Article16 />}/>
          <Route path="/article_17" element={<Article17 />}/>
          <Route path="/article_18" element={<Article18 />}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
