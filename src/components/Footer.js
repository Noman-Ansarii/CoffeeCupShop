import React from 'react'
import IMG from '../images/OfferLogo.png'

function Footer() {
  return (
    <>
      <a name="Contact"></a><div className="MainFooter">
        <div className="InnerFooter container">
            <div className="FooterLogo">
                <img src={IMG} alt="" /><a href='/'>CoffeeCup</a>
            </div>

            <div className="Box3">
                <h1>Information.</h1>
                <a href="/">About Us</a>
                <a href="/">Branches</a>
                <a href="/">Menu</a>
                <a href="/">Contact</a>
                <a href="/">Map</a>
            </div>
            <div className="Box4">
                <h1>Contact Us.</h1>
                <a href="/">Support</a>
                <a href="mailto:coffeecup@gmail.com" target="_blank">coffeecup@gmail.com</a>
            </div>
        </div>

        <div className="Footer">
            <a href="/"><i className='bx bxl-facebook'></i></a>
            <a href="/"><i className='bx bxl-twitter' ></i></a>
            <a href="/"><i className='bx bxl-instagram' ></i></a>
            <a href="/"><i className='bx bxl-youtube'></i></a>
        </div>
      </div>
    </>
  )
}

export default Footer
