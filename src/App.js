import { useState } from "react";
import Post from "./components/People";
import data from "./birthday-data";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <div className="main-container">
      <h1 className="main-header">Birthdays</h1>
      <section className="card-section">
        <div className="content-container">
          <p className="card-header-text">{people.length} birthdays today:</p>
            <Post people={people} />
        </div>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </div>
  );
}

export default App;
