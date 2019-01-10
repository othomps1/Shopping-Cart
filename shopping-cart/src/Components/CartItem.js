import React from 'react'

class CartItem extends React.Component {

    render() {
        const { item } = this.props
        const price = item.product.priceInCents / 100
        return (
        <div class="list-group-item">
            <div class="row">
            <div class="col-md-8">{item.product.name}</div>
            <div class="col-md-2">{price}</div>
            <div class="col-md-2">{item.quantity}</div>
            </div>
        </div>
      )
    }
}

export default CartItem;
