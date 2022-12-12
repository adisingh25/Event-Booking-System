import Card from "./Card";


const Order = (props) => {

    const sdate = props.start.slice(0,10)
    const edate = props.end.slice(0,10)
    
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
                </Card>
        </div>
    )
}

export default Order