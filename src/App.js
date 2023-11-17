
import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [apiData, setApiData] = useState("Default message");

  const fetchData = async (url) => {
    const newData = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => res.json())
    .catch((err) =>console.log(err));

    setApiData(newData.result);
  }

  const handleClick = (endpoint) => {
    const apiUrl = `http://localhost:5800/${endpoint}`;
    fetchData(apiUrl);
  };

  useEffect(() => {
    // Fetch default data when the component mounts
    fetchData('http://localhost:5800/api');
  }, []);

  return (
    <div className="App">
      <h1>Full-stack App demo</h1>
      <div>
        <button onClick={() => handleClick('api')}>Hello</button>
        <button onClick={() => handleClick('quit')}>Bye</button>
      </div>
      <div>
        <p>{apiData}</p>
      </div>
    </div>
  );
}

export default App;
