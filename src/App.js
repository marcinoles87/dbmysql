
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

  const handleDelete = (id , e) => {

    console.log(id)
    console.log(e)
    axios.delete(`http://localhost:8081`)
    .then(res => console.log(res))
    
    
    
  }

  return (
    <div className="App">
      <h1>Dane pobrane z bazy danych  MYSQL </h1>
     {data.map( (item , index) =>{
      
      return(
        <div key={index} className='item-container'>
            <h1 className='item-name'>{item.Nazwa}</h1>
            <p  className='item-date'>{item.Data}</p>
            <p className='item-desc'>{item.Opis}</p>
            <button onClick={(e) =>handleDelete(item.Nazwa , e)}>Delete</button>
        </div>
      )
     })}
    </div>
  );
}

export default App;
