

const UpdateEventModal = () => {
    return (
        <div>
            <div class="modal fade" id="updateeventModal" tabindex="-1" aria-labelledby="updateeventModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="updateeventModalLabel">UPDATE BOOKING</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                            <input class="form-control mb-3" type="text" value="Oragnization/Name" aria-label="readonly input example" readonly />
                            <input class="form-control mb-3" type="text" value="Purpose" aria-label="readonly input example" readonly />
                            <input class="form-control mb-3" type="date" value="10/12/22" aria-label="readonly input example" readonly />
                            <input class="form-control mb-3" type="date" value="10/12/22" aria-label="readonly input example" readonly />
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
                            <button type="button" class="btn btn-success">UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpdateEventModal;