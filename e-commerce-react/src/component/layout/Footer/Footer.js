import React from 'react'

import playStore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"
function Footer() {
  return (
    <footer id='footer'>

        <div class ="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone </p>
            <img src={playStore} alt='playstore'/>
            <img src={appStore} alt='Appstore'/>
        </div>

        <div class ="midFooter">
            <h1>ECOMMERCE</h1>
            <p>High Quality is our first priority</p>
            <p>Copyrights 2023 &copy; AkhileshSoni </p>
</div>

<div class ="rightFooter">
    <h4>Follow Us</h4>
    <a href='https://www.linkedin.com/in/akhilesh-soni-09218716b/'>Linkldln</a>
    <a href='https://www.linkedin.com/in/akhilesh-soni-09218716b/'>Linkldln</a>
    <a href='https://www.linkedin.com/in/akhilesh-soni-09218716b/'>Linkldln</a>
        </div>
    </footer>
  )
}

export default Footer