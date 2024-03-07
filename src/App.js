
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [data , setData] = useState([]);


  useEffect( () => {
    axios.get('http://localhost:8081')
    
    .then( res => setData(res.data))
    
    
    .catch( err => console.log(err))
  },[])

 
  console.log(data)

  return (
    <div className="App">
      <h1>Dane pobrane z bazy danych  MYSQL </h1>
     {data.map( (item , index) =>{
      return(
        <div key={index} className='item-container'>
            <h1>{item.Nazwa}</h1>
            <p>{item.Data}</p>
            <p>{item.Opis}</p>
        </div>
      )
     })}
    </div>
  );
}

export default App;
