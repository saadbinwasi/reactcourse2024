import './App.css';

function App() {

  const name = 'saadbinwasi';
  const likes = 10;
  return (
    <div className="App">
    <div className='content'>
      <h1>APP COMPONENT {name}</h1>
      <p>{likes+1}</p>
      </div>
    </div>
  );
}

export default App;
