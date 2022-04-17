import React, { useState } from 'react';
import Values from 'values.js';
import SingleColor from './SingleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#d285f2').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className='container header'>
        <h3>color palette generator</h3>
        <form onSubmit={handleSubmit} className='form-color'>
          <label htmlFor='hexValue'>Hex Color: </label>
          <input
            id='hexValue'
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='Ex: #D285F2'
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            generate
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
