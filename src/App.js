import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [catUrl, setCatUrl] = useState('');

  const loadRandomCat = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(response => response.json())
      .then(data => {
        if (data.length > 0 && data[0].url) {
          setCatUrl(data[0].url);
        } else {
          setCatUrl('');
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setCatUrl('');
      });
  };

  useEffect(() => {
    loadRandomCat();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Random Cat Gallery</h1>
      </header>
      <main>
        <button onClick={loadRandomCat}>Show New Cat</button>
        <div className="imageContainer">
          {catUrl ? <img src={catUrl} alt="A random cat" /> : <p>No cats found :(</p>}
        </div>
      </main>
      <footer>
        <p>The Cat Gallery API</p>
      </footer>
    </div>
  );
}

export default App;
