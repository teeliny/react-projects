import React, { useState } from 'react';
import './quiz.css';
import moment from 'moment';
import data from './data.json';

export default function App() {
  const questions = data.questions;
  const now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [date, setDate] = useState(now)
  const [history, setHistory] = useState([]);

  const handleAnswerButtonClick = ((isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setDate(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
      console.log(history);
    }
  })

  const handleStartOver = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
    setHistory([{score: score, date: date}, ...history]);
  }



	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className='result-section'>
          <div className='score-section'>You scored {score} out of {questions.length}</div>
          <button onClick={handleStartOver} className='retry-section'>Try Again</button>
          <div className="history-section">
            <p className="history-header">Recent History</p>
            <table>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Date</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {history.map((item, index) => (
                  <tr key={index} className="history-tray">
                    <td>{index + 1}</td>
                    <td>{item.date}</td>
                    <td><strong>{item.score}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
							<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              ))}
					</div>
				</>
			)}
		</div>
	);
}
