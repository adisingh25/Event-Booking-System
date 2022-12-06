
import Header from "./components/Header";
import Crousel from "./components/Crousel";
import Customer from "./components/Customer";
import {  useState } from 'react';


function App() {


  const [loggedIn, setloggedIn] = useState(false)
  const [name, setName] = useState('')

    

  const changeLog = () => {
    let log = !loggedIn
    console.log('changing log from app')
    setloggedIn(log)
  }

  const onChange = (customer) => {
    setName(customer)
  }

  
  

  return (
    <div className="App">
      {loggedIn === false &&
        <>
          <Header onLogin={changeLog} onChange={onChange}/>
          <Crousel />
        </>

      }
      {loggedIn === true && <Customer onLogout={changeLog} name={name}/>}

    </div>
  );
}

export default App;
