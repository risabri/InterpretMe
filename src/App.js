import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Demographic from './pages/Demographic';
import Explanation from './pages/Explanation';
import Detailpage from './pages/Detailpage';
import Upload from './pages/Upload';
import Upload_2 from './pages/Upload_2';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/demographic" element={<Demographic />} />
        <Route path="/loginpage" element={<Loginpage />} />
        <Route path="/explanation" element={<Explanation />} />

        <Route path="/detailpage" element={<Detailpage/>} />

        <Route path="/upload" element={<Upload />} />
        <Route path="/upload2" element={<Upload_2 />} />
      </Routes>
    </Router>
  );
}

export default App;
