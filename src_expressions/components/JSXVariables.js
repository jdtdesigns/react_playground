import React from 'react';

// TODO: Create a `name` variable
const someName = 'Eric';
const length = someName.length;

// TODO: Create a `thoughts` variable
// This should be a string regarding what you think of React
const thoughts = 'separates the MEN from the MERN';

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is {someName}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
