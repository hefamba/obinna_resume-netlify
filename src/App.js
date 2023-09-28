import React from 'react';
import HomePage from './pages/HomePage';
import ResponsiveAppBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import EducationPage from './pages/EducationPage';
import ProExperiencePage from './pages/ProExperiencePage';
import WritingSamplesPage from './pages/WritingSamplesPage';
import InterestPage from './pages/InterestPage';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Education" element={<EducationPage />} />
        <Route path="Experience" element={<ProExperiencePage />} />
        <Route path="Writings" element={<WritingSamplesPage />} />
        <Route path="Interest" element={<InterestPage />} />
      </Routes>
    </div>
  );
}

export default App;
