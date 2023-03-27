import './app.css';
import ToDoList from '../components/to-do-list/to-do-list.jsx';


function App() {
  document.body.style = 'background: linear-gradient(to right, #42bdf7, #4e9efa)';
  
  return (
    <div className="App">
      <ToDoList/>
    </div>
  );
}

export default App;
