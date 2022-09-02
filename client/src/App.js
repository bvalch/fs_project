import TopContainer from './container/TopContainer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
      <TopContainer/>
      </Router>
      
     
    </div>
  );
}

export default App;
