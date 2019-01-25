import React from 'react'

export default class CartItem extends React.Component {
    render() {
        const { item } = this.props
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">{item.product.name}</div>
                    <div className="col-md-2">${item.product.priceInCents/100}</div>
                    <div className="col-md-2">{item.quantity}</div>
                </div>
            </div>
        )
    }
}
