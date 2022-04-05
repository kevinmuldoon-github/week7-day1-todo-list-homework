import React, {useState} from 'react';
import './App.css';

function App() {

  // Create initial array of todo items
  const [todoItems, setTodoItems] = useState([
    {name: "Buy a Coffee", priority: "High"} , 
    {name: "Walk to Class", priority: "Low"} , 
    {name: "Have Lunch", priority: "High"}
  ]);

  const [todoName, setTodoName] = useState('');
  const [todoPriority, setTodoPriority] = useState('');

  // Create list to display at front-end
  const todoList = todoItems.map ( (item, index) => {
    return (
  <li key={index}>
  {item.name} &nbsp; (
    {item.priority=="High" ?
    <span className='highpriority'>High Priority</span> :
    <span className='lowpriority'>Low Priority</span>
  })
  </li>
) // End of return
});

 // Set a variable which saves what is saved in the new name input
  const handleNameInput = (event) => {
  setTodoName (event.target.value);
};

const setPriority = (event) => {
  setTodoPriority(event.target.value);
};


// Function to call when submit button is pressed

const saveNewItem = (event) => {
  event.preventDefault(); // Prevent the page from reloading when submit button is pressed
  const copyItems = [...todoItems];
  copyItems.push( {name: todoName, priority: todoPriority});
  setTodoItems(copyItems);
  setTodoName('');
};



  return (
    <div className="App">
      <header className="App-header">
        <h1>My ToDo List</h1>
      </header>

<ul>
  {todoList}
</ul>

<form onSubmit={saveNewItem}>
  <label htmlFor='todo-name'>Add a New Item:</label>
  <input id='todo-name' type='text' value={todoName} onChange={handleNameInput} />
  &nbsp;

  <input id='high-priority' name='priority' type='radio' value='High' onChange={setPriority} />
  <label htmlFor='high-priority'>High Priority</label>

  <input id='low-priority' name='priority' type='radio' value='Low' onChange={setPriority} />
  <label htmlFor='low-priority'>Low Priority</label>

  <br /><br />
  <input type='submit' value='Add to ToDo List' />
</form>

    </div>
  );
}

export default App;
