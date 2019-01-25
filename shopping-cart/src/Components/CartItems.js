import React from 'react'
import CartItem from './CartItem'

export default class CartItems extends React.Component {
    render() {
        const listOfItems = this.props.items.map(elem => <CartItem key={elem.id} item={elem} />)
        const total = this.props.items.reduce((acc, item) => {
            return acc + (item.product.priceInCents * item.quantity)}, 0) / 100
        return (
            <div className="container">
                <h1>Cart Items</h1>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-md-8">Product</div>
                            <div className="col-md-2">Price</div>
                            <div className="col-md-2">Quantity</div>
                        </div>
                    </div>
                    { listOfItems }
                    <p><b>Shopping Cart Balance: ${total}</b></p>
                </div>
            </div>
        )
    }
}
