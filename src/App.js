import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const logo = 'Turtle App';
  const [page, setPage] = useState('about');

  const showPage = () => {
    // if (page === 'home') {
    //   return <Home />;
    // } else if (page === 'about') {
    //   return <About />;
    // }

    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />
    }
  };

  return (
    <>
      <Header logo={logo} />

      {/* Show the corresponding page component based on the
          matching page variable value
       */}
      {showPage()}
      {/* {
        page === 'home' && <Home />
      }
      {
        page === 'about' && <About />
      } */}
    </>
  );
}

// function handleSubmit() {

// }

// form.addEventListener('submit', handleSubmit);

export default App;