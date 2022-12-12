

const CancelEventModal = (props) => {
  const getOrders = props.getOrder

  const base_api = "http://localhost:4000/api/v1/event";

  const cancelBooking = async() => {
      const info = await fetch(base_api + '/delete', {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: props.email,
    })
  }).then((res) => res.json())
    .catch((e) => {
      console.log(e)
    })

  // console.log(info.token)
  if (info.status === 200) {
    getOrders(props.email)
  }
}




return (
  <div>
    <div class="modal fade" id="canceleventModal" tabindex="-1" aria-labelledby="canceleventModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="canceleventModalLabel">Cancel Booking</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to <b>CANCEL</b> the booking ??<br /><br />
            <button type="button" class="btn btn-outline-success mx-3" data-bs-dismiss="modal">NO</button>
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal" onClick={cancelBooking}>YES</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}


export default CancelEventModal;