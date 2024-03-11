
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

  const handleAdd = () => {



    // const newArray = data.filter((item) => item.Nazwa !== id)
    
    // setData(newArray)


    axios.post('http://localhost:8081' , 

    {
      Nazwa : Nazwa ,
      Data : Data ,
      Opis : Opis
    })
    .then( () => {
      console.log('success')
    })
  
    
  }


  console.log(Nazwa)
  console.log(Data)
  console.log(Opis)

  return (
    <div className="App">

      <input type='text' placeholder='name' onChange={ (e) => setNazwa(e.target.value)}></input>
      <input type='date' placeholder='data' onChange={ (e) => setDate(e.target.value)}></input>
      <input type='text' placeholder='opis' onChange={ (e) => setOpis(e.target.value)}></input>
      <h1>Dane pobrane z bazy danych  MYSQL </h1>
     {data.map( (item , index) =>{
      
      return(
        <div key={index} className='item-container'>
            <h1 className='item-name'>{item.Nazwa}</h1>
            <p  className='item-date'>{item.Data}</p>
            <p className='item-desc'>{item.Opis}</p>
            <button onClick={handleAdd}>Delete</button>
        </div>
      )
     })}
    </div>
  );
}

export default App;
