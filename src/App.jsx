import { useState } from "react";
import Header from "./Components/Header";
import CardComponent from "./Components/cardsContainer";
import data from './data'

function App(){
  console.log(data)

  const[inputedValue,setInputedValue]= useState("");
 
 

  const handleInputChange =(event)=>{

  setInputedValue(event.target.value)
  }

 
  const filteredData = data.filter((store) =>
  store.Place.toLowerCase().includes(inputedValue.toLowerCase())
);

  return (
    <div>
     <Header 
     inputedValue ={inputedValue}
     handleInputChange={handleInputChange}
     />
    <CardComponent 
    filteredData={filteredData}
    />
     
    </div>
    
   
  )
}
export default App