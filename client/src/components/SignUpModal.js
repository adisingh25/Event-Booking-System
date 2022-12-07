

const SignUpModal = (props) => {


    const base_api = "http://localhost:4000/api/v1";
    var goAhead = false
    const loginme = props.onLogin
    const onChange = props.onChange



    const signUpTime = async (myname,myphoneNumber, myemail, mypassword) => {
        const info = await fetch(base_api + '/signup', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name : myname,
            phoneNumber : myphoneNumber,
            email: myemail,
            password: mypassword
          })
        }).then((res) => res.json())
          .catch((e) => {
            console.log(e)
            goAhead = false
          })
        
        // console.log(info.token)
        if(info.token !== undefined) {
            goAhead=true
        }
      }

    const allinfo = async () => {
        const myname = document.getElementById('floatingName').value
        const myemail = document.getElementById('signUpEmail').value
        const myphoneNumber = document.getElementById('floatingMnumber').value
        const mypassword = document.getElementById('signUpPassword').value

        // console.log(myemail)

        // console.log(myname, myemail, myphoneNumber, mypassword)

        await signUpTime(myname,myphoneNumber, myemail, mypassword)
        if(goAhead === true) {
            console.log(goAhead + 'from signUpmodal')
            loginme()
            onChange(myname, myemail)
        }
    }
    return (
        <div>
            <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="signupModalLabel">SIGN-UP</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <div class="form-floating mb-3">
                                    <input type="text" class="form-control-lg" id="floatingName" placeholder="name" />
                            <label for="floatingInput">Name</label>
                                    
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control-lg" id="signUpEmail" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control-lg" id="signUpPassword" placeholder="Password" />
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="tel" class="form-control-lg" id="floatingMnumber" placeholder="9999999999" />
                                    <label for="floatingInput">Mobile</label>
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
        </div>
    )
}


export default SignUpModal