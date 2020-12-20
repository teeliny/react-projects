import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ question }) => {
  const { title, info } = question;
  
  const [showInfo, setShowInfo] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  }

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button onClick={handleShowInfo} className="btn">
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showInfo ? info : null}</p>
    </article>
  )
};

export default Question;
