import React, { useState, useEffect } from 'react'
import moment from 'moment';
import './grocery.css';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) return JSON.parse(list);
  else return [];
}
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: ''
  });
  // Submit form content
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'please enter value', 'danger');
    }
    else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editID) {
          return {...item, title: name}
        }
        return item;
      }))
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'value edited successfully', 'success');
    }
    else {
      let now = moment();
      const newItem = {id: now.format("dddd, MMMM Do YYYY, h:mm:ss a"), title: name}
      setList([...list, newItem]);
      setName('');
      showAlert(true, 'value added successfully', 'success');
    }
  }
  // function for showing alert
  const showAlert = (show = false, message = '', type = '') => setAlert({ show, message, type });
  // Function to clear the list
  const clearList = () => {
    showAlert(true, 'empty list', 'danger')
    setList([]);
  };
  // To remove an item from the list on delete button
  const removeItem = (id) => {
    showAlert(true, 'item removed', 'danger');
    setList(list.filter((item) => item.id !== id))
  }
  // To edit an item from the list on edit button
  const editItem = (id) => {
    const specificItem = list.find(item => item.id === id);
    setName(specificItem.title);
    setEditID(id);
    setIsEditing(true);
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list])
  
  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
      <h3>grocery bud</h3>
      <div className="form-control">
        <input type="text"
          className="grocery"
          placeholder="e.g. eggs"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <button type="submit" className="submit-btn">
          {isEditing ? 'Edit' : 'Submit'}
        </button>
      </div>
    </form>
    {list.length > 0 &&
      <div className="grocery-container">
      <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className="clear-btn" onClick={clearList}>clear items</button>
      </div>
    }
  </section>
}

export default App
