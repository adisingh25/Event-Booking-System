

const SignUpModal = () => {
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
                                    <input type="email" class="form-control-lg" id="floatingEmail" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control-lg" id="floatingPassword" placeholder="Password" />
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
                            <button type="button" class="btn btn-success">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUpModal