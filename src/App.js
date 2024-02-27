
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [data , setData] = useState([]);


  useEffect( () => {
    axios.get('http://localhost:8081')
    .then( res => console.log(res.data))
    .then( (data) => {
      setData(data)
    })
    .catch( err => console.log(err))
  },[])

  console.log(data[0])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
