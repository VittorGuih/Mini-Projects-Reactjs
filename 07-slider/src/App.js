import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import data from './data';
import Slide from './Slide';
import Title from './Title';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lasIndex = people.length - 1;
    if (index < 0) setIndex(lasIndex);
    else if (index > lasIndex) setIndex(0);
  }, [index, people]);

  useEffect(() => {
    let autoSlide = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => clearInterval(autoSlide);
  }, [index]);

  return (
    <section className='section '>
      <Title />
      <div className='section-center'>
        {people.map((person, personIndex) => {
          let position = 'nextSlide';
          if (personIndex === index) position = 'activeSlide';
          else if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          )
            position = 'lastSlide';
          return (
            <Slide person={person} position={position} key={personIndex} />
          );
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
