import Card from "./Card";


const Order = (props) => {
    return (
        <div>
            return (

            <>
                {props.orders.map((order) => (<Card key={order.id}>{order.purpose}</Card>))}

            </>
            )
        </div>
    )
}

export default Order