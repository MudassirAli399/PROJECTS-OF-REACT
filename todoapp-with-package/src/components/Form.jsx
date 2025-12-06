import React from 'react';
import { useState } from 'react';
import { addtodo,buttonupdate, updatetext } from '../store/Slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Form = () => {

    const dispatch = useDispatch()

    const text = useSelector((state) => state[1])

    const [input,setinput] = useState("")
    const submit = (e)=>{

        e.preventDefault()
        if(text==="Add"){
          dispatch(addtodo(input))
           setinput("")
        }
        if(text==="Update"){
          
          dispatch(updatetext(input))
          setinput("")
          dispatch(buttonupdate("Add"))

        }
      
        
       
        
        

    }

    return (
        <div>
           <form  onSubmit={submit}   style={{textAlign:"center",marginTop:"100px"}}>
  <input 
    id='input'
    type="text" 
    value={input}
    onChange={(e)=>{setinput(e.target.value)}} 
    placeholder="Enter Your Task..." 
    style = {{padding:"10px 15px",width:"250px",border:"2px solid #4CAF50",borderRadius:"8px",fontSize:"16px"}}
  />
  <button 
    type="submit" 
    style={{padding:"10px 20px",backgroundColor:"#4CAF50",color:"white",border:"none",borderRadius:"8px",fontSize:"16px",marginLeft:"10px"}}
  >
    {text}
  </button>
            </form>
        </div>
    );
};

export default Form;