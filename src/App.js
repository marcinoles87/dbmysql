
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

 

  return (
    <div className="App">
     {data.map( (item) =>{
      return(
        <>
        <p>{item.Nazwa}</p>
        </>
      )
     })}
    </div>
  );
}

export default App;
