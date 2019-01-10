import React from 'react'

class AddItem extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        itemId: 1,
        quantity: 1,
      }
    }

    onSubmit = (e) => {
      e.preventDefault()
      const { itemId, quantity } = this.state
      const { AddItem } = this.props
      const options = this.props.options
    const item = options.find((element) => {
        return element.id === parseInt(itemId)
    })
      let product = {
        product: {
            id: item.id,
            name: item.name,
            priceInCents: item.priceInCents,
        },
        quantity: quantity
    }
      AddItem(product)
      this.setState({
        itemId: 1,
        quantity: 0
      })
    }

    onquantityChange = (e) => {
      e.preventDefault()
      this.setState({
        ...this.state,
        quantity: e.target.value
      })
    }

    onItemChange = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      this.setState({
        ...this.state,
        itemId: e.target.value
      })
    }
    render() {
        const options = this.props.options
        console.log(options)
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <div>
              <label>quantity: </label>
              <input value={this.state.quantity} onChange={this.onquantityChange} />
            </div>
            <div>
              <label>Item: </label>
              <select value={this.state.value} onChange={this.onItemChange}>
              {options.map((option) => {return <option value={option.id}>{option.name}</option>})}
              </select>
            </div>
            <input type='submit' />
          </form>
        </div>
      )
    }
  }

  export default AddItem;
