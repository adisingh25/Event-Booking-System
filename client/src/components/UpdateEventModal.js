// const organizationName = props.order.organizationName
    // const purpose = props.order.purpose
    // const sdate = props.order.start.slice(0,10)
    // const edate = props.order.end.slice(0,10)

// import { useEffect } from "react"

const UpdateEventModal = (props) => {

    // useEffect(() => {
    //     const organizationName = document.getElementById('organization')
    //     const purpose = document.getElementById('purpose')
    //     const start = document.getElementById('from')
    //     const end = document.getElementById('to')
    //     const sdate = props.order.start.slice(0,10)
    //     const edate = props.order.end.slice(0,10)
    //     organizationName.value = props.order.organizationName
    //     purpose.value = props.order.purpose
    //     start.value = sdate
    //     end.value = edate
    // },[])


    const base_api = "http://localhost:4000/api/v1/event";


    const updateBook = async (theme, email, fooding ) => {
        await fetch(base_api + '/update', {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            theme : theme,
            userId : email,
            fooding : fooding
          })
        }).then((res) => res.json())
          .catch((e) => {
            console.log(e)
          })

      }




    const eventinfo = async() => {
        const theme = document.getElementById('changetheme').value
        const foodElement = document.getElementById('changefooding')
        let   fooding = false
        if(foodElement.checked === true) {
            fooding = true
        }

        await updateBook(theme, props.email, fooding)
        // console.log('after updaing things : - ' , theme, props.email, fooding)
        props.getOrder()
    }


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
                            {/* <input class="form-control mb-3" id="organization" type="text" value={organizationName} aria-label="readonly input example" readonly />
                            <input class="form-control mb-3" id="purpose" type="text" value={purpose} aria-label="readonly input example" readonly />
                            <input class="form-control mb-3" id="from" type="text" value={sdate} aria-label="readonly input example" readonly />
                            <input class="form-control mb-3"  id="to"type="text" value={edate} aria-label="readonly input example" readonly /> */}
                            <select class="form-select mb-3" id="changetheme" aria-label="Default select example">
                                    <option selected>Themes</option>
                                    <option value="Halloween Party">Halloween Party</option>
                                    <option value="Avengers">Avengers</option>
                                    <option value="Oktoberfest">Oktoberfest</option>
                                    <option value="Black & White Ball">Black & White Ball</option>

                                </select>

                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="changefooding" />
                                    <label class="form-check-label" for="fooding">
                                        Fooding
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-success" onClick={eventinfo} data-bs-dismiss="modal">UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpdateEventModal;