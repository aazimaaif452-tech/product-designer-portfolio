/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import MCACaseStudy from './pages/MCACaseStudy';
import Ken42CaseStudy from './pages/Ken42CaseStudy';
import IIMUdaipurCaseStudy from './pages/IIMUdaipurCaseStudy';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="relative min-h-screen bg-brand-offwhite selection:bg-brand-accent selection:text-brand-black">
          <div className="grain-overlay" />
          <CustomCursor />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works/mca-player-registration" element={<MCACaseStudy />} />
            <Route path="/works/ken42-alumni-experience" element={<Ken42CaseStudy />} />
            <Route path="/works/iim-udaipur-admissions" element={<IIMUdaipurCaseStudy />} />
          </Routes>
          
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}
