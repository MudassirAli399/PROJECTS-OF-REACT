 async function fetchdata(){
        await fetch(`https://open.er-api.com/v6/latest/usd`)
        .then((response)=>(response.json()))
        .then((data)=>{
            console.log(data);
            
            
        })
      }
      fetchdata()