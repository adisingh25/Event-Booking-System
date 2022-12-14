import Card from "./Card";


const Order = (props) => {

    const sdate = props.start.slice(0,10)
    const edate = props.end.slice(0,10)
    const food = props.fooding
    
    return (
        <div>
            

                {/* {props.orders.map((order) => (<Card key={order.id}>{order.purpose} {order.start} {order.end}</Card>))} */}
                <Card key={props.id}>
                    <div>
                         PURPOSE - {props.purpose}
                    </div> 
                    START - {sdate} 
                    <br />
                    TO - {edate}
                    <br />
                    Theme - {props.theme}
                    <br />
                    {food && <>Fooding - Included</>}
                    {food === false && <>Fooding - Not Included</>}
                </Card>
        </div>
    )
}

export default Order