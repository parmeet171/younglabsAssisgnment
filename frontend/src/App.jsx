import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await fetch(
        `http://localhost:3000/api/greet?name=${encodeURIComponent(name)}`
      );
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResponse(data.message);
      }
    } catch (err) {
      setError("Unable to get Greeting");
    }
  };

  return (
    <div>
      <div>
        <h1>Greeting Page</h1>

        <form onSubmit={handleSubmit}>
          <div className="fields">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              aria-label="Name"
            />
            <button type="submit">Get Greeting</button>
          </div>
        </form>
        <div className="response">
          {error && <div className="error">{error}</div>}
          {response && <div className="message">{response}</div>}
        </div>
      </div>
    </div>
  );
}

export default App;
