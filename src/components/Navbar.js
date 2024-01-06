import React, { useEffect } from 'react'
import LOGO from '../images/Logo.png';

function Navbar() {
    useEffect(() => {
        const ToggleBtn = document.querySelector('.Toggle-btn');
        const ToggleBtnIcon = document.querySelector('.Toggle-btn i');
        const dropDownMenu = document.querySelector('.Dropdown-menu');
    
        // Update your click event handler
        ToggleBtn.onclick = function (event) {
          event.preventDefault(); // Prevent page refresh
          dropDownMenu.classList.toggle('open');
          const isOpen = dropDownMenu.classList.contains('open');
          ToggleBtnIcon.className = isOpen ? 'bx bx-x' : 'bx bx-menu';
        };
    
      }, []); // Empty dependency array ensures this effect runs only once after initial render
    
    return (
        <>
            <header>
                <nav>
                    <div className="nav-conatiner">
                        <div className="nav-links-conatiners">
                            <div className="Toggle-btn">
                                <i className="bx bx-menu"></i>
                            </div>
                            <ul>
                                <div className="nav-links"><li><a href="#One">Home</a></li></div>
                                <div className="nav-links"><li><a href="#Third">About</a></li></div>
                                <div className="nav-links"><li><a href="#Second">Menu</a></li></div>
                                <div className="nav-links"><li><a href="/">Blog</a></li></div>
                                <div className="nav-links"><li><a href="#Shop">Shop</a></li></div>
                                <div className="nav-links"><li><a href="#Contact">Contact</a></li></div>
                            </ul>
                        </div>
                        <div className="nav-LogoConatiner">
                            <div className="nav-Logo">
                                <img src={LOGO} alt="" />
                            </div>
                            <div className="nav-text">
                                <a href="/">CoffeeCup</a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="Dropdown-menu">
                    <div className="nav-link"><li><a href="#One
                    ">Home</a></li></div>
                    <div className="nav-link"><li><a href="#Third">About</a></li></div>
                    <div className="nav-link"><li><a href="#Second">Menu</a></li></div>
                    <div className="nav-link"><li><a href="/">Blog</a></li></div>
                    <div className="nav-link"><li><a href="#Shop">Shop</a></li></div>
                    <div className="nav-link"><li><a href="#Contact">Contact</a></li></div>
                </div>
            </header>
        </>
    )
}

export default Navbar
