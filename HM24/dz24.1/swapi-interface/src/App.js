import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [endpoint, setEndpoint] = useState('people/1/');
    const [data, setData] = useState(null);

    return (
        <div className="container mt-5">
            <h1>SWAPI</h1>
            <div className="form-group">
                <label htmlFor="endpointInput">https://swapi.dev/api/</label>
                <input
                    type="text"
                    className="form-control"
                    id="endpointInput"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                />
            </div>
            <button className="btn btn-primary" onClick={() => setData(endpoint)}>
                Get info
            </button>
            <div className="mt-4">
                {data && (
                    <pre>
            {`
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/"
  ],
  "species": [],
  "vehicles": [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
}`}
          </pre>
                )}
            </div>
        </div>
    );
}

export default App;
