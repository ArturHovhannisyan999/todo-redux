import './App.css';
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <h1 className='title'>Todo Redux</h1>
        <Routes>
            <Route path='/' element={<TodoForm />}/>
            <Route path='/todo' element={<TodoItem />}/>
        </Routes>
    </div>
  );
}

export default App;
