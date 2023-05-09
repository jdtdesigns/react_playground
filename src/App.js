import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const logo = 'Turtle App';
  const [page, setPage] = useState('home');

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
      {/* 
        1. Pass the setPage function to the Header component
        2. Within the header component, set a click listener on
          each link to call the setter function and change the page
          variable accordingly
       */}

      <Header page={page} logo={logo} setThatPage={setPage} />

      {showPage()}
    </>
  );
}

export default App;