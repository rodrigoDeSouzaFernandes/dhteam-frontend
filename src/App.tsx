import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/home';
import Header from 'components/header/';
import Footer from 'components/footer';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
