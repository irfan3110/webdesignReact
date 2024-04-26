// src/api/api.js
export function fetchRandomCat() {
  return fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
      if (data.length > 0 && data[0].url) {
        return data[0].url;
      } else {
        throw new Error('No cat found');
      }
    });
}
