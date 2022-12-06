
import Header from "./components/Header";
import Crousel from "./components/Crousel";
import Customer from "./components/Customer";
import { useState } from 'react';


function App() {

  
  const [loggedIn , setloggedIn] = useState(false)

  const changeLog = () => {
    let log = !loggedIn
    setloggedIn(log)
  }

  return (
    <div className="App">
      {loggedIn === false && 
      <>
        <Header onLogin={changeLog}/>
        <Crousel />
      </>
     
    }
      {loggedIn === true &&  <Customer onLogout={changeLog}/>}
   
    </div>
  );
}

export default App;
