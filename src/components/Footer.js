import React from 'react'
import logo from '../images/small_logo.png'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='Company Logo'/>
                    {/* <p>We are a family Mediterranean restaurant, focused on traditional recipes served 
                        with a modern twist.
                    </p> */}
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Services</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservation</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br /> 097 Downtown, USA</li>
                        <li>Phone: <br /> ++ 9876543210</li>
                        <li>Email: <br /> little.lemon@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
