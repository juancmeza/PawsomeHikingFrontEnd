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
          username: "test2",
          password: "123"
          

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
      <form onSubmit={() => this.fetchTest()}>
        <label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="username"
            id="username"
            name="username"
          />{" "}
          <br />
        </label>

        <label>
          <input
            className="form-control form-control-lg"
            type="password"
            placeholder="password"
            id="password"
            name="password"
          />{" "}
          <br />
        </label>
        <button
          className="btn btn-outline-light btn-block"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

export default App;
