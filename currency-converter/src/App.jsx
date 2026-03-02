import { useState } from 'react'
import Inputbox from '../components/inputbox'
import useCurrencyapi from '../hook/currencyapi'

import './App.css'

function App() {
  
  
  const [from,setfrom] = useState(
    "USD"
  )
  const [to,setto] = useState("PKR")
  const data = useCurrencyapi(from)
  console.log(data);
  const [number,setnumber] = useState(1)

   const exchangeRate = number * data?.rates?.[to] 
  
 
  
  

  return (
   <div>
    < Inputbox label="From" currencyoptions={Object.keys(data?.rates || {})} selectedcurrency={from} oncurrencychange={setfrom}
    amount={number} onAmountChange={setnumber}
    />
    <br />
    < Inputbox label="To" amount={exchangeRate.toFixed(2)} currencyoptions={Object.keys(data?.rates || {})} selectedcurrency={to} oncurrencychange={setto} />  
   </div>
  )
}

export default App
