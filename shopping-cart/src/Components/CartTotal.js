import React from 'react'

const CartTotal = ({ items }) => {
    let sum = 0
    for (let i = 0; i < items.length; i++) {
        sum += (items[i].product.priceInCents)
    }
    sum /= 100
    console.log(sum)
    return (
    <div className="total">
        <h4>Total Price:${sum}</h4>
    </div>
    )
}

export default CartTotal;
