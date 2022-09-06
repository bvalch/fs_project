import TopContainer from './container/TopContainer';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";

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
