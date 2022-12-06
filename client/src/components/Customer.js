
import BookEventModal from "./BookEventModal";
import UpdateEventModal from "./UpdateEventModal";
import CancelEventModal from "./CancelEventModal";
const Customer = (props) => {
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
                <BookEventModal />
                <button type="button" class="btn btn-warning btn-lg me-2" data-bs-toggle="modal" data-bs-target="#updateeventModal">Update Current Booking</button>
                <UpdateEventModal />
                <button type="button" class="btn btn-danger btn-lg me-2" data-bs-toggle="modal" data-bs-target="#canceleventModal">Cancel Booking</button>
                <CancelEventModal />
            </div>
            <center>
            <h3>
                Hi! Aditya, Hope you are doing good!!
            </h3>
            </center>
           


        </div >
    )
}



export default Customer;