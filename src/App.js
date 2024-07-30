
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'


function App() {

  const [data , setData] = useState([]);

  const [Nazwa , setNazwa] = useState('');
  const [Opis , setOpis] = useState('');
  const [Adres , setAdres ] = useState('');
  const [Nip , setNip ] = useState('');
  const [Data , setDate ] = useState('');
  const [Cena , setCena ] = useState('');



  const dataNow = new Date();
  const dataNew = `${dataNow.getDay()}.${dataNow.getMonth()}.${dataNow.getFullYear()}`
 


  useEffect( () => {
    axios.get('http://localhost:8081')
    
    .then( res => {
      setData(res.data)
    } )
    
    
    .catch( err => console.log(err))
  },[])


  const handleAdd = () => {
    console.log(Cena)
    axios.post('http://localhost:8081/' , 

      
    {
      // DataSprzedazy : dataNow,
      Nazwa : Nazwa ,
      Data : Data ,
      Opis : Opis ,
      Nip : Nip ,
      Adres : Adres ,
      Cena : Cena ,
    })
    .then( () => {
      console.log('success add item do database')
    })
  
    
  }

  const handleDelete = (item) => {

    console.log(item)


    axios.delete(`http://localhost:8081/delete/${item.Nazwa}` ,
    
    { data : {
      DataSprzedazy : dataNow,
      Nazwa : item.Nazwa ,
      Data : item.Data ,
      Opis : item.Opis ,
      Adres : item.Adres ,
      Nip : item.Nip ,
      Cena : item.Cena ,
      
     }
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
      <input type='text' placeholder='kwota' onChange={ (e) => setCena(e.target.value)}></input>
      <input type='text' placeholder='Opis Faktury' onChange={ (e) => setOpis(e.target.value)}></input>
      <button onClick={handleAdd}>Dodaj nowe Dane do faktury</button>
      <h1>Dane pobrane z bazy danych  MYSQL </h1>
      <button onClick={handleGetData}>Show data BASE</button>
    
    
     {data.map( (item , index) =>{

      
      
      return(

        <div key={index} className='item-container'>
          <>

          <div className='faktura_dane'>
            <p>Faktura numer : 6/2024</p>
            <p>Data wystawienia : {item.DataSprzedazy} </p>
            <p>Data sprzedaży : {item.DataSprzedazy}</p>
            <p>Płatnośc : Przelew</p>

          </div>

        <div className='item_sell'>
      <h3>Sprzedawca:</h3>
            <p className='item-name'>Nazwa : Usługi Porządkowe</p>
            <p  className='item-adres'>Adres : Kraków</p>
            <p  className='item-nip'>Nip : 100-100-100-234</p>
            {/* <p className='item-desc'>Opis : Usługa porządkowa</p> */}
            {/* <button onClick={() => handleDelete(item)}>Usun</button> */}
           
        </div>


        <div className='item_sell'>
           <h3>Nabywca:</h3>
            <p className='item-name'>Nazwa :{item.Nazwa}</p>
            <p  className='item-adres'>Adres : {item.Adres}</p>
            <p> 31-004 Kraków</p>
            <p  className='item-nip'>Nip : {item.Nip}</p>
            <p className='item-desc'></p> 
            <p>{item.Adres}</p>
            
            {/* <p  className='item-date'>Data :{item.Data}</p> */}
            {/* <p className='item-desc'>Opis :{item.Opis}</p> */}
            
            <button onClick={() => handleDelete(item)}>Usun</button>
        </div>

        <div className='faktura_pozycja'>
        <table>
              <tr>
                <td>Lp.</td>
                <td>Nazwa towaru / usługi</td>
                <td>Ilośc</td>
                <td>Cena netto</td>
                <td>Cena brutto</td>
                <td>Wartość netto</td>
                <td>VAT %</td>
                <td>Wartość VAT</td>
                <td>Wartość brutto</td>
              </tr>

                <tr>
                <td>1</td>
                <td>{item.Opis}</td>
                <td>1</td>
                <td>{item.Cena}</td>
                <td>-</td>
                <td>{item.Cena}</td>
                <td>23</td>
                <td>-</td>
                <td>{item.Cena}</td>
                </tr>
</table>
        </div>

        <div className='faktura_podsumowanie'>
          <p> <b>Wartość netto :</b>  {item.Cena} PLN</p>
          <p> <b>Wartość VAT :</b>  - PLN</p>
          <p> <b>Wartość brutto :</b>  {item.Cena} PLN</p>
         
        </div>

        <div className='faktura_do_zaplaty'>
          <h3>Do zapłaty : </h3>
          <p> {item.Cena} PLN </p>
           
        </div>

        <div className='faktura_do_zaplaty'>
         
           <p>Słownie: {item.Cena} PLN </p>
        </div>

        <div className='faktura_podpis'>
          <h4>Imie i Nazwisko odbiorcy</h4>
          <h4>Imie i Nazwisko wystawcy</h4>
        </div>
         
           
           </>
        </div>

        
      )
     })}
    </div>
  );
}

export default App;
