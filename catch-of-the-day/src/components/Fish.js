import React, { Fragment } from "react";
import { formatPrice } from "../helpers"

class Fish extends React.Component {
  render() {
    const {image, name, price, desc, status} = this.props.details;
    const isAvailable = status === "available";
    // if no order, noOrder will be true
    const noOrder = !this.props.order
    const props = this.props

    function decreaseOrderButton() {
      if (noOrder) {
        return
      }
      return (
        <button
          onClick={() => {props.decreaseOrder(props.index)}}
          >
          Decrease from Cart
        </button>
      )
    }

    return (
      <li className="menu-fish">
        <img src={image} alt={image} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => { this.props.addToOrder(this.props.index) }}
          >
          {isAvailable ? "Add To Cart" : "Sold Out"}
        </button>
        {decreaseOrderButton()}
      </li>
    )
  }
}

export default Fish;
