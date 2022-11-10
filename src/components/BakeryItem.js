import React from 'react'

function addCart(cart, name) {
  if (cart.hasOwnProperty(name)) {
    cart[name] += 1 
  } else {
    cart[name] = 1
  }
  return cart
}

function addTotal(total, price) {
  return total + price
}

export default function BakeryItem(props) {

  function handleClick() {
    props.setCart(addCart(props.cart, props.name))
    props.setTotal(addTotal(props.total, props.price))
  }

  return <section>
    <h3>{props.index + 1}: {props.name}</h3>
    <img src={props.image} alt={props.name}/>
    <p>{props.description}</p>
    <p>{props.price}</p>
    <button onClick={handleClick}>Add to cart</button>
  </section>
}