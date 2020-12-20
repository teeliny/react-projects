import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    let prevIndex = index === 0 ? people.length - 1 : index - 1;
    setIndex(prevIndex);
  }

  const nextPerson = () => {
    let nextIndex = index === people.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  }

  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = randomIndex + 1 === people.length ? 0 : randomIndex + 1;
    }
    setIndex(randomIndex);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}><FaChevronLeft /></button>
        <button className="next-btn" onClick={nextPerson}><FaChevronRight /></button>
      </div>
      <button className="random-btn" onClick={randomPerson}>suprise me</button>
    </article>
  );
};

export default Review;
