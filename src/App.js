import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const logo = 'Turtle App';
  const [page, setPage] = useState('home');

  return (
    <>
      <Header logo={logo} />

      {/* Show the corresponding page component based on the
          matching page variable value
       */}
    </>
  );
}

// function handleSubmit() {

// }

// form.addEventListener('submit', handleSubmit);

export default App;