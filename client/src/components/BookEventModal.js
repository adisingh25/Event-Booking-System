

const BookEventModal = (props) => {


    const base_api = "http://localhost:4000/api/v1/event";


    const bookingTime = async (organizationName, purpose, start, end, theme, email, fooding) => {
        await fetch(base_api + '/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                organizationName: organizationName,
                purpose: purpose,
                start: start,
                end: end,
                theme: theme,
                userId: email,
                fooding: fooding
            })
        }).then((res) => res.json())
            .catch((e) => {
                console.log(e)
            })
    }

    const eventinfo = async () => {
        const organizationName = document.getElementById('orgName').value
        const purpose = document.getElementById('eventPurpose').value
        const start = document.getElementById('startDate').value
        const end = document.getElementById('endDate').value
        const theme = document.getElementById('themes').value
        const foodElement = document.getElementById('fooding')
        let fooding = false
        if (foodElement.checked === true) {
            fooding = true
        }

        await bookingTime(organizationName, purpose, start, end, theme, props.email, fooding)
        // console.log(organizationName, purpose, start, end, theme, props.email, fooding)
        props.getOrder()


    }


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
                                <input type="text" class="form-control" id="orgName" placeholder="Name" />
                                <label for="floatingInput">Organization/Name</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="eventPurpose" placeholder="Marriage" />
                                <label for="floatingInput">Purpose</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="startDate" placeholder="Date" />
                                <label for="floatingPassword">From</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="date" class="form-control" id="endDate" placeholder="Date" />
                                <label for="floatingPassword">To</label>
                            </div>
                            <select class="form-select mb-3" aria-label="Default select example" id="themes">
                                <option selected>Themes</option>
                                <option value="Halloween Party">Halloween Party</option>
                                <option value="Avengers">Avengers</option>
                                <option value="Oktoberfest">Oktoberfest</option>
                                <option value="Black & White Ball">Black & White Ball</option>
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
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={eventinfo}>BOOK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookEventModal;