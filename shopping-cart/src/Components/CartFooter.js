import React from 'react'

const CartFooter = ({ copyright }) => {
    return (
        <span className="navbar navbar-dark bg-dark"><a className="navbar-brand" href="/">&copy; {copyright}</a></span >
    )
}

export default CartFooter
