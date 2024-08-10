import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import PoemsPage from './Pages/PoemsPage';
import Contact from './Pages/Contact';
import ReviewOfAsLong from './Pages/ReviewOfAsLong';
import NavigatingIstanbul from './Pages/NavigatingIstanbul';
import ChoosingFashion from './Pages/ChoosingFashion';
import WhatWillPeople from './Pages/WhatWillPeople';
import PleasureCompany from './Pages/PleasureCompany';
import PostGrad from './Pages/PostGrad';
import PandemicSocialize from './Pages/PandemicSocialize';
import ComposurePoem from './Pages/ComposurePoem';
import BeautyPoem from './Pages/BeautyPoem';
import OceanCity from './Pages/OceanCity.jsx';
import ReactGA from 'react-ga';
import Palestine from './Pages/Palestine.jsx';

ReactGA.initialize('G-L199GYGVZ2');


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/poems" element={<PoemsPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog/review-of-as-long-as-the-lemon-trees-grow" element={<ReviewOfAsLong />} />
      <Route path="/blog/navigating-istanbul" element={<NavigatingIstanbul />} />
      <Route path="/blog/choosing-sustainable-fashion" element={<ChoosingFashion />} />
      <Route path="/blog/what-will-people-say" element={<WhatWillPeople />} />
      <Route path="/blog/pleasure-of-ones-company" element={<PleasureCompany />} />
      <Route path="/blog/post-graduation-anxiety" element={<PostGrad />} />
      <Route path="/blog/a-hrefhttpssalenachaudhrywordpresscom20210831the-pandemic-has-affected-the-way-we-socializethe-pandemic-has-affected-the-way-we-socializea" element={<PandemicSocialize />} />
      <Route path="/poems/composure" element={<ComposurePoem />} />
      <Route path="/poems/beauty" element={<BeautyPoem />} />
      <Route path="/blog/ocean-city" element={<OceanCity/>}></Route>
      <Route path="/blog/palestine" element={<Palestine />} />
    </Routes>
  </HashRouter>
);
