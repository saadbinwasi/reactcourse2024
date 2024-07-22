import './App.css';
import Navbar from './Navbar';


function App() {
  const handleClick = (e) => {
    console.log('hello',e.target.value)
  }


  const handleClickagain = (name) => {
    console.log('hello' + name)
  }
  return (
    <div className="App">
      <Navbar/>
    <div className='content'>

      <h1>Content</h1>

      <button onClick={handleClick}>click me</button>
      <button onClick={() => {
        handleClickagain('saad')}}>click me again</button>
    
    
    
      </div>
    </div>
  );
} 

export default App;
