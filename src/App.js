import { useState } from 'react';
import Header from './components/Header';


function App() {
  const logo = 'Turtle App';
  const [turtles, setTurtles] = useState([]);
  const [turtleType, setTurtleType] = useState('');
  const [turtleColor, setTurtleColor] = useState('');

  const handleSubmit = (eventObj) => {
    eventObj.preventDefault();

    // const newTurts = [...turtles];

    // newTurts.push({
    //   type: turtleType,
    //   color: turtleColor
    // });

    // setTurtles(newTurts);

    setTurtles([...turtles, {
      type: turtleType,
      color: turtleColor
    }]);
  }

  const handleTypeChange = (eventObj) => {
    setTurtleType(eventObj.target.value);
  }

  const handleColorChange = (eventObj) => {
    setTurtleColor(eventObj.target.value);
  }

  return (
    <>
      <Header logo={logo} />

      <p>Type: {turtleType}</p>
      <p>Color: {turtleColor}</p>

      <form onSubmit={handleSubmit}>
        <input onChange={handleTypeChange} type="text" placeholder="Enter turtle type" />
        <input onChange={handleColorChange} type="text" placeholder="Enter turtle color" />
        <button>Add Turtle</button>
      </form>


      {turtles.map((turtleObj, index) => (
        <div key={index} className="turtle">
          <h3>Type: {turtleObj.type}</h3>
          <p>Color: {turtleObj.color}</p>
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