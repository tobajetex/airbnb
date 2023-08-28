
function Modal({ closeModal,googleMapsLink,name}) {
    console.log(googleMapsLink)
    return (
      <div className="modal-overlay">
        <h3 className="modal-overlay-heading">{name}</h3>
        <img src={`/assets/map-img/${googleMapsLink}`} className="modal--img"/>
        <div className="modal-content" onClick={closeModal}>
        <a href="#" className="closeModal">X</a>
        </div>
      </div>
    );
  }
  
  export default Modal;
  //  <img src={`/assets/map-img/${store.GoogleMapsLink}`}/>
  //  return null;
 