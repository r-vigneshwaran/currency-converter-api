import React,{useEffect,useState} from 'react'
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
import Header from './Components/Header'
import {GetExchange} from './Components/CurrencyConversion'

function App() {
  const [fromCurrency,setFromCurrency]=useState('');
  const [toCurrency,setToCurrency]=useState('');
  const [value,setValue]=useState('');
  const [result,setResult]=useState()

  const {isAuthenticated}= useAuth0();

  const HandleSubmit=()=>{
    GetExchange(fromCurrency.toUpperCase(),toCurrency.toUpperCase()).then((result)=>{
      setResult(value*(Object.values(result.data)[0]))
    }).catch((error)=>{
      console.log(error)
    })
  }
  
  return (
    <div>
      <Header/>
        
       {isAuthenticated ?(
         <div className="main d-flex justify-content-center flex-column align-items-center m-5 w-100" >
        
         <table class="table table-striped w-50">
         <thead>
           <tr>
             <th>Value</th>
             <th>From</th>
             <th>To</th>
             <th>Convert</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td><div class="input-group input-group-sm mb-1">
             <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
           </div></td>
             <td><div class="input-group input-group-sm mb-1">
             <input value={fromCurrency.toUpperCase()} onChange={(e)=>setFromCurrency(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
           </div></td>
             <td><div class="input-group input-group-sm mb-1">
             <input value={toCurrency.toUpperCase()} onChange={(e)=>setToCurrency(e.target.value)} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
           </div></td>
           <td><button onClick={()=>HandleSubmit(fromCurrency,toCurrency)} type="button" class="btn btn-primary">convert</button></td>
           </tr>
         </tbody>
       </table>
       
       </div>
       ):(
         <div className="d-flex justify-content-center m-5">
            <h1>Login to convert currency</h1>
         </div>
       )}
       <div className="d-flex justify-content-center align-items-center">
       <strong>
       
       {result} &nbsp; {toCurrency.toUpperCase()}
       </strong>
       </div>
    </div>
  );
}

export default App;
