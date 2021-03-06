import React from 'react';
import data from './data';
import SingleQuestion from './Question';
import './accordion.css';

function Accordion() {
  return (
    <main className="">
      <div className="container">
        <h3>Questions and Answer About Login</h3>
        <section className="info">
          {data.map(question => (
            <SingleQuestion key={question.id} question={question} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Accordion;
