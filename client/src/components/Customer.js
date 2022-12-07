
import BookEventModal from "./BookEventModal";
import UpdateEventModal from "./UpdateEventModal";
import CancelEventModal from "./CancelEventModal";
import Card from "./Card";
// import { useEffect, useState } from "react";
const Customer = (props) => {

    // const [orders, setOrders] = useState([])

    // const base_api = "http://localhost:4000/api/v1";


    // useEffect(() => {
    //     getOrders(props.email);
    //   }, [])


    // const getOrders = async () => {
    //     const info = await fetch(base_api + '/get', {
    //       method: 'POST',
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         email: props.email,
    //       })
    //     }).then((res) => res.json())
            // .then(data => setOrders(data.events))
    //       .catch((e) => {
    //         console.log(e)
    //       })

            // console.log(orders)
    //   }


    const getOrders = () =>{
        console.log('getting the order')
    }

    return (
        <div>
            <div>
                <header class="p-3" Style="background-color : black;">
                    <div class="container">
                        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <ul class="nav col-8 col-lg-auto  mb-2 justify-content-center mb-md-0">
                                <li><button class="btn btn-warning px-2 text rounded-pill">Home</button></li>
                                <li><button class="btn  px-2 text-white rounded-pill">About</button></li>
                            </ul>
                            <h4 class="mx-auto text-warning" >Welcome to TULIP Banquet</h4>
                            <div class="text-end">
                            <button type="button" class="btn btn-danger me-2" onClick={props.onLogout}>LogOut</button>
                        </div>
                        </div>
                    </div>
                </header>
            </div>
            <div class="d-flex mx-2 my-4" Style="margin-right: 30.5rem!important; margin-left: 31.5rem!important;">
           
                <button type="button" class="btn btn-warning btn-lg me-2" data-bs-toggle="modal" data-bs-target="#bookeventModal">New Booking</button>
                <BookEventModal email={props.email}/>
                <button type="button" class="btn btn-warning btn-lg me-2" data-bs-toggle="modal" data-bs-target="#updateeventModal">Update Current Booking</button>
                <UpdateEventModal email={props.email}/>
                <button type="button" class="btn btn-danger btn-lg me-2" data-bs-toggle="modal" data-bs-target="#canceleventModal">Cancel Booking</button>
                <CancelEventModal email={props.email} getOrder={getOrders}/>
            </div>
            <center>
            <h3>
                Hi! {props.name}, Hope you are doing good!!
            </h3>
            <Card>This is from the Card Component</Card>
            </center>
           


        </div >
    )
}



export default Customer;