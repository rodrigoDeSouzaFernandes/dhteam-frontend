import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from 'components';
import { Home, Classes, Faq, JiuJitsu, Contact } from 'pages';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aulas" element={<Classes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/o-jiu-jitsu" element={<JiuJitsu />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
