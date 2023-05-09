import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const logo = 'Turtle App';
  const [page, setPage] = useState('about');

  const showPage = () => {
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

      {showPage()}
    </>
  );
}

export default App;