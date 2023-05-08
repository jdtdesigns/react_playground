import { useState, useEffect } from 'react';
import Header from './components/Header';

const apiURL = 'https://swapi.dev/api/people';

function App() {
  const logo = 'Turtle App';
  const [characters, setCharacters] = useState([]);
  const [turtles, setTurtles] = useState([]);
  const [formState, setFormState] = useState({
    turtleType: '',
    turtleColor: ''
  });

  useEffect(() => {
    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        console.log('retrieved');
        setCharacters(data.results);
      })
  }, []);

  const handleSubmit = (eventObj) => {
    eventObj.preventDefault();

    setTurtles([...turtles, {
      ...formState
    }]);

    setFormState({
      turtleType: '',
      turtleColor: ''
    });
  }

  const handleChange = (eventObj) => {
    const prop = eventObj.target.name;

    setFormState({
      ...formState,
      [prop]: eventObj.target.value
    });
  }

  return (
    <>
      <Header logo={logo} />

      <form onSubmit={handleSubmit}>
        <input
          name="turtleType"
          value={formState.turtleType}
          onChange={handleChange}
          type="text"
          placeholder="Enter turtle type" />
        <input
          name="turtleColor"
          value={formState.turtleColor}
          onChange={handleChange}
          type="text"
          placeholder="Enter turtle color" />
        <button>Add Turtle</button>
      </form>


      {turtles.map((turtleObj, index) => (
        <div key={index} className="turtle">
          <h3>Type: {turtleObj.turtleType}</h3>
          <p>Color: {turtleObj.turtleColor}</p>
        </div>
      ))}

      {characters.map((charObj, index) => (
        <div key={index} className="character">
          <h3>Name: {charObj.name}</h3>
          <p>Eye Color: {charObj.eye_color}</p>
        </div>
      ))}

      {/* If the turtles array has no length, show a paragraph */}
      {!turtles.length && <p>No Turts Have Been Added.</p>}
    </>
  );
}

// function handleSubmit() {

// }

// form.addEventListener('submit', handleSubmit);

export default App;