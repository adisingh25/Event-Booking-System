// import { useState } from "react";


const LoginModal = (props) => {
   const loginme = props.onLogin
   const onChange = props.onChange

   const base_api = "http://localhost:4000/api/v1";

    var goAhead = false

   const loginTime = async (email, password) => {
    const info = await fetch(base_api + '/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((res) => res.json())
      .catch((e) => {
        console.log(e)
        goAhead = false
      })
    
    // console.log(info.token)
    onChange(info.name, info.email)
    if(info.token !== undefined) {
        goAhead=true
    }
  }

   const allinfo = async () => {
    const email = document.getElementById('floatingEmail').value 
    const password = document.getElementById('floatingPassword').value
    await loginTime(email,password)
    if(goAhead === true) {
        // console.log(goAhead + 'from loginmodal')
        loginme()
       
    }
   }


    return (
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="loginModalLabel">LOGIN</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control-lg" id="floatingEmail" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control-lg" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={allinfo}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal;