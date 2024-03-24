
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'

function App() {

  const [data , setData] = useState([]);

  const [Nazwa , setNazwa] = useState('');
  const [Opis , setOpis] = useState('');
  const [Adres , setAdres ] = useState();
  const [Nip , setNip ] = useState();
  const [Data , setDate ] = useState();

  console.log(Adres)


  useEffect( () => {
    axios.get('http://localhost:8081')
    
    .then( res => {
      setData(res.data)
    } )
    
    
    .catch( err => console.log(err))
  },[])


  const handleAdd = () => {

     console.log(Nazwa)
    

    axios.post('http://localhost:8081' , 

    {
      Nazwa : Nazwa ,
      Data : Data ,
      Opis : Opis ,
      Adres : Adres ,
      Nip : Nip ,
    })
    .then( () => {
      console.log('success')
    })
  
    
  }

  const handleDelete = (item) => {

    console.log(item)


    axios.delete(`http://localhost:8081/delete/${item.Nazwa}` ,
    
    { data : {
      Nazwa : item.Nazwa ,
      Data : item.Data ,
      Opis : item.Opis ,
      Adres : item.Adres ,
      Nip : item.Nip , }
    } ) 
    
  }
  


  const handleGetData = () => {
    window.location.href = window.location.href;
    console.log('sucess get data')
    axios.get('http://localhost:8081')
  }


  return (
    <div className="App">

      <input type='text' placeholder='Nazwa Firmy' onChange={ (e) => setNazwa(e.target.value)}></input>
      <input type='text' placeholder='Adres Firmy' onChange={ (e) => setAdres(e.target.value)}></input>
      <input type='text' placeholder='Nip' onChange={ (e) => setNip(e.target.value)}></input>
      <input type='date' placeholder='Data' onChange={ (e) => setDate(e.target.value)}></input>
      <input type='text' placeholder='Opis Faktury' onChange={ (e) => setOpis(e.target.value)}></input>
      <button onClick={handleAdd}>Dodaj nowe Dane do faktury</button>
      <h1>Dane pobrane z bazy danych  MYSQL </h1>
      <button onClick={handleGetData}>Show data BASE</button>
     {data.map( (item , index) =>{
      
      return(
        <div key={index} className='item-container'>
            <h1 className='item-name'>{item.Nazwa}</h1>
            <p  className='item-adres'>{item.Adres}</p>
            <p  className='item-nip'>{item.Nip}</p>
            <p  className='item-date'>{item.Data}</p>
            <p className='item-desc'>{item.Opis}</p>
            <button onClick={() => handleDelete(item)}>Usun</button>
           
        </div>
      )
     })}
    </div>
  );
}

export default App;
