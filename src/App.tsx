import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'components';
import { Home, Classes } from 'pages';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<Classes />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
