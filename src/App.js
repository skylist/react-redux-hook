import React from 'react';
import CourseList from './components/course-list';
import { addAction } from './redux-quack';
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch()

  const addCourse = () => {
      dispatch(addAction(`Curso-${(Math.random() * 100).toFixed(0)}`))
  }
  
  return (
    <div className="App">
      <p>Exemplo usando REDUX_HOOKS</p>
      <button type="button" onClick={addCourse}>Adcionar Curso</button>
      <CourseList/>
    </div>
  );
}

export default App;
