import React, { useEffect }  from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removetodo,buttonupdate,updateid ,todolocalstorage} from "../store/Slice";
const Todos = () => {
    const dispatch = useDispatch()
    const task =  useSelector((state) => state)

    useEffect(() => {
        console.log(task);
         if(task.length<=2){
            dispatch(buttonupdate("Add"))
          }
    }, [task]);

    const todos = task.filter((item, index) => index > 1)

    
          
  
  
  const [completedTasks, setCompletedTasks] = useState({});


    return (

        <>
        
<ul style={{ listStyleType: "none", padding: 0, marginLeft: "10%", marginRight: "10%" }}>
  {task.filter((item, index) => index > 1).map((item) => (
    
  
      
    <li
    

  style={{
    key : item.id,
   
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2e3034", 
    padding: "0.75rem 1.25rem", 
    borderRadius: "0.75rem", 
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.15)", 
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out", 
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.25)";
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.15)";
  }}
>
  <input
    type="checkbox"
  onChange={(e) => {
  setCompletedTasks((prev) => ({
    ...prev,
    [item.id]: e.target.checked,
  }));
}}
    style={{
      transform: "scale(1.3)", 
      marginRight: "1rem", 
      accentColor: "#3b82f6",
    }}
  />

  <div
   id={item.id}
    style={{
      color: "#e2e8f0", 
      fontSize: "1.5rem", 
      fontFamily: "Inter, sans-serif",
      flexGrow: 1,
      marginRight: "1rem", 
      wordBreak: "break-word", 
    textDecoration: completedTasks[item.id] ? "line-through" : "none"

    }}
  >
    {item.text}
  </div>

  <div style={{ display: "flex", gap: "0.75rem" }}>
    <button
      onClick={() => {
        dispatch(removetodo(item.id));
      }}
      style={{
        color: "white",
        backgroundColor: "#dc2626", 
        border: "none",
        padding: "0.5rem 1.25rem", 
        borderRadius: "0.375rem",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "background-color 0.2s ease-in-out", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")} 
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        style={{ width: "1.25rem", height: "1.25rem" }} 
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        />
      </svg>
    </button>
    <button
      disabled={completedTasks[item.id]}
      onClick={() => {
        dispatch(buttonupdate("Update"));
        dispatch(updateid(item.id));
      }}
      style={{
        color: "white",
        backgroundColor: "#2563eb", 
        border: "none",
        padding: "0.5rem 1.25rem",
        borderRadius: "0.375rem",
        fontSize: "1rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem", 
        transition: "background-color 0.2s ease-in-out", 
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")} 
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")} 
    >
      ✏️ Update
    </button>
  </div>
</li>
  ))}
</ul>


        
        
        </>

    )
};

export default Todos;
