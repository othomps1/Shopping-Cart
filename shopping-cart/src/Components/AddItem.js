import React, { Component } from 'react'

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: 1,
      productID: this.props.products[0].id,
    }
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: +e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { quantity, productID } = this.state
    const product = this.props.products.find(product => product.id === productID)
    this.props.onAddItem({ quantity, product })
  }

  render() {
    const { products } = this.props
    return (
      <div className='container'>
      <form onSubmit={this.onSubmit}>
        <div>
        <label>Quantity</label><br/>
        <input type='number' min='1' name='quantity' value={this.state.quantity} onChange={this.onChange}/>
        </div>
        <div>
          <label>Product</label><br />
          <select name='productID' onChange={this.onChange}>
            {products.map((product, idx) => (
                <option key={idx} value={product.id}>{product.name}</option>
            ))}
          </select>
        </div>
        <input className='submit-button' type='submit'/>
      </form>
      </div>
    )
  }
}

export default AddItem
