import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) amount = 1;
    if (amount > data.length) amount = data.length;
    let arr = [];
    let checkIndex = [];
    while (amount) {
      let curIndex = Math.floor(Math.random() * data.length);
      if (checkIndex.indexOf(curIndex) === -1) {
        checkIndex.push(curIndex);
        arr.push(data[curIndex]);
        amount--;
      }
    }
    setText(arr);
  }
  
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
    )
}

export default App;
