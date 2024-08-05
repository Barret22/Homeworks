import React, { useState } from "react";
import "./App.css";

function App() {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");

  return (
      <div className="container">
        <h1 className="mt-5">SWAPI</h1>
        <div className="input-group mb-3">
          <input
              type="text"
              className="form-control"
              placeholder="https://swapi.dev/api/"
              readOnly
          />
          <input
              type="text"
              className="form-control"
              placeholder="people/1/"
              value={id}
              onChange={(e) => setId(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Get info
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            {resource} <span className="badge badge-primary">1</span>
          </div>
          <div className="card-body">
          <pre>
            {`{
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
          </div>
        </div>
      </div>
  );
}

export default App;
