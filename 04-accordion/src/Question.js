import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [toggleQuestion, setToggleQuestion] = useState(false);
  const handleToggleQuestion = () => {
    setToggleQuestion(!toggleQuestion);
  };
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={handleToggleQuestion}>
          {toggleQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {toggleQuestion && <p>{info}</p>}
    </article>
  );
};

export default Question;
