
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
const Header = (props) => {
    const onLogin = props.onLogin
    const onChange = props.onChange
    return (
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
                            <button type="button" class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#loginModal">Login</button>
                            <LoginModal onLogin={onLogin} onChange={onChange}/>
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#signupModal">Sign-up</button>
                            <SignUpModal onLogin={onLogin} onChange={onChange}/>
                        </div>
                    </div>
                </div>
            </header>


        </div>

    )
}

export default Header;