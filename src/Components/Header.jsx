 
 function Header({inputedValue, handleInputChange}){
    return (
        <div className="header">
            <div className="headline--content">
            <img src="/assets/logo.png" alt="God is good" className="header--logo"/>
            <h1 className="heading--text"> Justrite Store Locator</h1>
            </div>

            <div className="input--field--container">
                <label>Search</label>
                <input
                type="text"
                value={inputedValue}
                onChange={handleInputChange}
                placeholder="enter location close to you"
                 />
            </div>
         
        </div>
    )
 }
 export default Header
