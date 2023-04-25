import React, { Fragment } from 'react'
import {CgMouse} from "react-icons/all"
import "./Home.css"

import Product from "./Product.js"






function Home() {
  return <Fragment>
<div className='banner'>
    <p> Welcome to Ecommerce</p>
    <h1> FIND AMAZING PROUDUCTS BELOW</h1>

<a href='#container'> 
<button>Scroll<CgMouse/></button>
</a>
</div>

<h2 className='homeHeading' >Featured Products</h2>

<div className='container' id='container'></div>
<Product product = {product} />
  </Fragment>
}

export default Home