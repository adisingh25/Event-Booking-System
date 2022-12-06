

const BookEventModal = () => {
    return (
        <div class="modal fade" id="bookeventModal" tabindex="-1" aria-labelledby="bookeventModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="bookeventModalLabel">BOOK HALL</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingName" placeholder="Name" />
                    <label for="floatingInput">Organization/Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingPurpose" placeholder="Marriage" />
                    <label for="floatingInput">Purpose</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="floatingFromDate" placeholder="Date" />
                    <label for="floatingPassword">From</label>
                </div>
                <div class="form-floating mb-3">
                    <input type="date" class="form-control" id="floatingToDate" placeholder="Date" />
                    <label for="floatingPassword">To</label>
                </div>
                <select class="form-select mb-3" aria-label="Default select example">
                    <option selected>Themes</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="fooding" />
                    <label class="form-check-label" for="fooding">
                        Fooding
                    </label>
                </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">BOOK</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BookEventModal;