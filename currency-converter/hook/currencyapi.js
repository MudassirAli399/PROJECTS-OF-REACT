import { useEffect, useState } from "react";

 function useCurrencyapi(currency){
    const [data,setdata] = useState()
    useEffect(()=>{
      
      async function fetchdata(){
        await fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response)=>(response.json()))
        .then((data)=>{
            setdata(data)
            
        })
      }
      fetchdata()
           
    },[currency])
    return(
        data
    )
 }
 export default useCurrencyapi

