import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const data = [
  {
    name: 'JD',
    age: 43
  },
  {
    name: 'Bob',
    age: 99
  },
  {
    name: 'Susan',
    age: 35
  },
  {
    name: 'Jane',
    age: 25
  }
];

function App() {
  const logo = 'Turtle App';
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <>
      <Header show={show} logo={logo} another={'some other val'} />

      {show && (
        <>
          <h1>Welcome to our app. Let's learn about turtles!</h1>
          <p>Another paragraph</p>
        </>
      )}

      {show && <h1>Count: {count}</h1>}

      <button onClick={toggleShow}>Toggle Show</button>

      {show && <Footer logo={logo} />}
    </>
  );
}

export default App;

// function toggleFooter() {

// }

// btn.addEventListenter('click', toggleFooter());




// data.forEach(person => {
//   someWrapper.insertAdjacentHTML('beforeend', `
//   <div>
//     <h3>Name: ${person.name}</h3>
//     <p>Age: ${person.age}</p>
//   </div>
//   `)
// })

// const fruits = ['apple', 'orange', 'grape'];
// const state = [0, function() {}];

// function useState(initial_value) {
//   return [initial_value, function () { }]
// }

// const result = useState(['Jose', 'Greg', 'Ferny']);

// console.log(result[0]);


// function test(a, b, c) {

// }

// test(1, 2, ['one', two]);

// const [one, two, another, one_more] = fruits;
// const [count, setCount] = useState(0);

// console.log(one) // apple
// console.log(another) // grape
// console.log(one_more) // undefined
// console.log(setCount) // function () {}