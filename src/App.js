import { useState } from 'react';
import List from './List';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <div className="App">
      <section className="container">
        <h3 className="birthday--left">{people.length} birthdays today</h3>
        <List people={people} />
        <button className="app-button" onClick={() => setPeople([])}>
          Clear list
        </button>
      </section>
    </div>
  );
}

export default App;
