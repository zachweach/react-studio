import "./App.css"
import { useState } from "react"
import bakeryData from "./assets/bakery-data.json"
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image
})
/* ############################################################## */

export default function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState({})
  const [total, setTotal] = useState(0)

  return <main>
      <h1>My Bakery</h1>
      <div>
      <article>
        {bakeryData.map((item, index) => (
          <BakeryItem class="BakeryItem" {...item} index={index} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>
        ))}
      </article>
      
      <aside>
        <h2>Cart</h2>
        <hr />
          <ul>
            { Object.keys(cart).map((key, index) => (
                <li>{cart[key]}x {key}</li>
                ))
            }
          </ul>
          <p>Total: ${total.toFixed(2)}</p>
      </aside>
      </div>
    </main>
}
