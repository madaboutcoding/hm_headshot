import Reac from 'react';
import './NavBar.css';

function NavBar(){

    return (
        <div className="NavBar-div">
            <nav className="NavBar-nav">
                <ul className="NavBar-ul">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;