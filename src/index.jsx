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
import ScrollToTop from "./styles/ScrollToTop";

import Home from './pages/Home';
import Article01 from './pages/Article01';
import Article02 from './pages/Article02';
import Article03 from './pages/Article03';
import Article04 from './pages/Article04';
import Article05 from './pages/Article05';
import Article06 from './pages/Article06';
import Article07 from './pages/Article07';
import Article08 from './pages/Article08';

import Article10 from './pages/Article10';
import Article11 from './pages/Article11';
import Article12 from './pages/Article12';
import Article13 from './pages/Article13';
import Article14 from './pages/Article14';
import Article15 from './pages/Article15';
import Article16 from './pages/Article16';
import Article17 from './pages/Article17';
import Article18 from './pages/Article18';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
        <GlobalStyle/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about-me" element={<Article01 />}/>
          <Route path="/total-energies" element={<Article02 />}/>
          <Route path="/chatbot_ai" element={<Article03 />}/>
          <Route path="/baudry" element={<Article04 />}/>
          <Route path="/hieroglyphs" element={<Article05 />}/>
          <Route path="/u-net_model" element={<Article06 />}/>
          <Route path="/youtube-downloader" element={<Article07 />}/>
          <Route path="/bert-tweet" element={<Article08 />}/>

          <Route path="/data-snake-game" element={<Article10 />}/>
          <Route path="/gitlab-CI_CD" element={<Article11 />}/>
          <Route path="/arduino" element={<Article12 />}/>
          <Route path="/saas" element={<Article13 />}/>
          <Route path="/memgraph" element={<Article14 />}/>
          <Route path="/team-cohesion" element={<Article15 />}/>
          <Route path="/water-sport" element={<Article16 />}/>
          <Route path="/woodworking" element={<Article17 />}/>
          <Route path="/knowledge-base" element={<Article18 />}/>
        </Routes>
    <React.StrictMode></React.StrictMode>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
