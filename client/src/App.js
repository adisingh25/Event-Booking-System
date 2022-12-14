
import Header from "./components/Header";
import Crousel from "./components/Crousel";
import Customer from "./components/Customer";
import {  useState } from 'react';


function App() {


  const [loggedIn, setloggedIn] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

    

  const changeLog = () => {
    let log = !loggedIn
    // console.log('changing log from app')
    setloggedIn(log)
  }

  const onChange = (customer, customerEmail) => {
    setName(customer)
    setEmail(customerEmail)
    // console.log('name : ' + customer + 'Email : ' + customerEmail)
  }

  
  

  return (
    <div className="App">
      {loggedIn === false &&
        <>
          <Header onLogin={changeLog} onChange={onChange}/>
          <Crousel />
        </>

      }
      {loggedIn === true && <Customer onLogout={changeLog} name={name} email={email}/>}

    </div>
  );
}

export default App;
