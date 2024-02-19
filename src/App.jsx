import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import PersonCard from './components/PersonCard';
import { useState } from 'react'; 
import { useEffect } from 'react';
import PersonForm from './components/PersonForm';

function App() {
  const backend_url = "http://localhost:8000/api/people";
  const [people, setPeople] = useState([]);
  {/*useEffect() arra jó, ha valamit feltételhez kötve szeretnénk végrehajtani,
   két paramétert vár: egy függvényt (amit végre kell hajtania, azért adjuk így át a readPeople függvényt és nem simán paraméterként,
   mert asínc függvényt nem tud a useeffect() átvenni) és egy listát (ez a lista ált. state változókat tartalmaz, azt tartalmazza, hogy 
   ha egy adott változó, amit itt megadok megváltozik, akkor futtatja le az előző paraméterként megadott függvényt,
   valamint ezen kívül egyszer lefuttatja akkor, amikor az adott komponenst megjelenítem)*/}
  useEffect( () => {
    readPeople()
  }, []);

  const readPeople = async () => {
    const response = await fetch(backend_url);
    const data = await response.json();
    setPeople(data);
  }

 const createPerson = async (person) => {
  const response = await fetch(backend_url, {
    method: "POST",
    body: JSON.stringify(person),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
  const data = await response.json();
  if(response.ok){
    readPeople();
    return true;
  } else {
    alert(data.message);
    return false;
  }
 }

  return (
    <main className='container'>
      <section>
        <h2>Új ember hozzáadása</h2>
        <PersonForm onSubmit={createPerson} />
      </section>
      <section>
        <h2>Emberek listája</h2>
        <div className='row row-cols-lg-2 row-cols-1 gy-3'>
          {/*<PersonCard person={{name:"Gipsz Jakab",email:"gipsz@example.com",phone_number:"342534643242",address:"Budapest",birth_date:"1992-12-12"}}/>*/}
          {people.map(person => <PersonCard person={person} key={person.id}/>)}
        </div>
      </section>
      
    </main>  );
}

export default App
