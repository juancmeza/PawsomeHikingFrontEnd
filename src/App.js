import logo from './logo.svg';
import './App.css';

function App() {
  
  const fetchTest = () => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: "jcmt",
          

        }
      })
      })
      .then(r => r.json())
      .then(console.log)
  }
  
  return (
    <div className="App">
        <div>Test</div>
      <div>Test2</div>
    </div>
  );
}

export default App;
