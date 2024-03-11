
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [data , setData] = useState([]);

  const [Nazwa , setNazwa] = useState('');
  const [Opis , setOpis] = useState('');
  const [Data , setDate ] = useState();


  useEffect( () => {
    axios.get('http://localhost:8081')
    
    .then( res => setData(res.data))
    
    
    .catch( err => console.log(err))
  },[])

 
  console.log(data)

  const handleAdd = (id , e) => {

    e.preventDefault()

    // const newArray = data.filter((item) => item.Nazwa !== id)
    
    // setData(newArray)


    axios.post('http://localhost:8081/create' , 

    {
      Nazwa : Nazwa ,
      Data : Data ,
      Opis : Opis
    }
    
    )

    
    
    
    
    
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
            <button onClick={(e) =>handleAdd(item.Nazwa , e)}>Delete</button>
        </div>
      )
     })}
    </div>
  );
}

export default App;
