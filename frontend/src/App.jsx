import { useState } from "react";
import Card from './components/card'
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isload, setLoad] = useState(false);

  const handleSearch = async () => {
  console.log("Search clicked")
  setLoad(true)

  try {
    const response = await fetch(
      `http://127.0.0.1:5000/search?q=${query}`
    )

    console.log("Response received", response)

    const data = await response.json()

    console.log("Data:", data)

    setResults(data)
  } catch (error) {
    console.error("Fetch error:", error)
  } finally {
    setLoad(false)
  }
}

  return (
    <div>
      <h1>Tulip</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)
        }
        className="search-bar"
      />

      <button onClick={handleSearch} className="btn">
        Search
      </button>

      {isload ? (
        <div className="loading-view-container">
          <p> Loading...</p>
        </div>
      ) : (
        results.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            link={item.link}
          />
        ))
      )}
    </div>
  );
}

export default App;