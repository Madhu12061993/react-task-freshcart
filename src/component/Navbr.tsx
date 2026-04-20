import { useState } from 'react';
import './css/PopularProducts.css';
import NavbarHovered, { Account, Docs, Home, MegaMenu, Pages, Shop, Stores } from './hovered/navbar/NavbarHovered';


const Navbr = () => {
    const [isHovered, setisHovered] = useState(false);
    return (
        <nav className="navbar navbar-light  ">
            <div className="container-fluid d-flex flex-row justify-content-start gap-1">

                <button
                    className={`navbar-brand fs-6 btn-cick text-white d-flex gap-2 px-4 py-2 rounded-3 border-0  ${isHovered ? "bg-success" : ""}`}
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <i className="bi bi-ui-checks-grid"></i>
                    All Departments
                    {isHovered && <div className='hover-position'><NavbarHovered /></div>}
                </button>
                <a className="navbar-brand " hovering-position href="#"
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <span className='fonts-badges'>
                        <span className={`${isHovered ? "text-success" : ""}`}>Home</span>
                        
                        <i className="bi bi-chevron-down ms-2"></i>
                        {isHovered && <div className='Hover-position-home '> <Home /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <span className='fonts-badges'>
                        <span className={`${isHovered ? "text-success" : ""}`}>Shop</span>
                        
                        <i className="bi bi-chevron-down ms-2"></i>
                        {isHovered && <div className='Hover-position-shop '> <Shop/> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <span className='fonts-badges'>
                        <span className={`${isHovered ? "text-success" : ""}`}>Stores</span>
                        
                        <i className="bi bi-chevron-down ms-2"></i>
                        {isHovered && <div className='Hover-position-store '> <Stores /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#"
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <span className='fonts-badges'>
                        <span className={`${isHovered ? "text-success" : ""}`}> Mega menu</span>                       
                        <i className="bi bi-chevron-down ms-2"></i>
                        {isHovered && <div className='Hover-position-home '> <MegaMenu /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <span className='fonts-badges'>
                        <span className={`${isHovered ? "text-success" : ""}`}>Pages</span>
                        <i className="bi bi-chevron-down ms-2"></i>
                        {isHovered && <div className='Hover-position-page '> <Pages /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <span className='fonts-badges '>
                        <span className={`${isHovered ? "text-success" : ""}`}>Account</span>                        
                        <i className="bi bi-chevron-down ms-2"></i>
                        {isHovered && <div className='Hover-position-account '> <Account/> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Dashboard</span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setisHovered(true)}
                    onMouseLeave={() => setisHovered(false)} >
                    <span className='fonts-badges'>
                        <span className={`${isHovered ? "text-success" : ""}`}>Docs</span>
                        </span>
                    {isHovered && <div className='Hover-position-doc '> <Docs /> </div>}
                </a>
            </div>
        </nav>
    )
}

export default Navbr
