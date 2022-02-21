import { useState } from 'react';
import './App.css';
import Table from './Table';
import user from './user';
function App() {
  const [query,setQuery] = useState('');

  const search=(data)=>(
    data.filter(res=>
      res.first_name.toLowerCase().includes(query.toLowerCase()) ||
      res.last_name.toLowerCase().includes(query.toLowerCase()) ||
      res.email.toLowerCase().includes(query.toLowerCase())       
      )
  )

  return (
    <div className="app">
        <input
        type="text"
        placeholder="Search...."
        className="searchbar"
        onChange={(e)=>setQuery(e.target.value)}
        />

    {/* <ul className="list">
      {
        user.filter((data)=>data.first_name.toLowerCase().includes(query.toLowerCase())).map((res)=>(
          <li className="list__content" key={res.id}>
            {res.first_name}
          </li>
        )
        )
      }
    </ul>    */}

    <Table user={search(user)}/>

    </div>
  );
}

export default App;
