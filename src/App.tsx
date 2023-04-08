import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/home';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
}

export default App;
