 
import { useState } from "react";
import Card from "./card" 


 function CardComponent({filteredData}){
  const[modalState,setModalState]=useState(new Array(filteredData.length).fill(false))

  const openModal = (index) => {
    const updatedModalStates = [...modalState];
    updatedModalStates[index] = true;
    setModalState(updatedModalStates);
  };
  
  const closeModal = (index) => {
    const updatedModalStates = [...modalState];
    updatedModalStates[index] = false;
    setModalState(updatedModalStates);
  }; 



    return (
        <div className="container"> 
                  {filteredData.map((store, index) => (
                    <Card 
                    key={index}
                    id={index}
                    isModalOpen={modalState[index]}
                    openModal={()=>openModal(index)}
                    closeModal={()=>closeModal(index)}
                    store={store}
                    />
        ))}
          
        </div>
        
    )
 }
 export default CardComponent
 