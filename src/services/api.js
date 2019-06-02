const BASE_URL = "https://www.omdbapi.com"
const API_KEY = "c5f2171f" //api key can be changed
// http://www.omdbapi.com/?i=tt3896198&apikey=c5f2171f&s=dog
export function apiRequest(query, method = 'GET') {
  const url = BASE_URL + `?apikey=${API_KEY}&s=${query}`;
  return fetch(url, { method }).then(response => response.json())
}
