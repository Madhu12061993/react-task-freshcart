import { useState } from 'react';
import './css/PopularProducts.css';
import NavbarHovered, { Account, Docs, Home, MegaMenu, Pages, Shop, Stores } from './hovered/navbar/NavbarHovered';


const Navbr = () => {
    const [activeMenu, setactiveMenu] = useState<string | null>(null);
    return (
        <nav className="navbar navbar-light  ">
            <div className="container-fluid d-flex flex-row justify-content-start gap-1">

                <a
                    className={`navbar-brand fs-6 btn-cick text-white d-flex gap-2 px-4 py-2 rounded-3 border-0  ${activeMenu === "Departments" ? "bg-success" : ""}`}
                    onMouseEnter={() => setactiveMenu("Departments")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <i className="bi bi-ui-checks-grid"></i>
                    All Departments
                    {activeMenu === "Departments" && <div className='hover-position'><NavbarHovered /></div>}
                </a>
                <a className="navbar-brand " hovering-position href="#"
                    onMouseEnter={() => setactiveMenu("home")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className='fonts-badges'>
                        <span className={`${activeMenu === "home" ? "hoverMenu" : ""}`}>Home</span>

                        <i className="bi bi-chevron-down ms-2"></i>
                        {activeMenu === "home" && <div className='Hover-position-home '> <Home /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setactiveMenu("shop")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className='fonts-badges'>
                        <span className={`${activeMenu === "shop" ? "hoverMenu" : ""}`}>Shop</span>

                        <i className="bi bi-chevron-down ms-2"></i>
                        {activeMenu === "shop" && <div className='Hover-position-shop '> <Shop /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setactiveMenu("store")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className='fonts-badges'>
                        <span className={`${activeMenu === "store" ? "hoverMenu" : ""}`}>Stores</span>

                        <i className="bi bi-chevron-down ms-2"></i>
                        {activeMenu === "store" && <div className='Hover-position-store '> <Stores /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#"
                    onMouseEnter={() => setactiveMenu("mega")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className='fonts-badges'>
                        <span className={`${activeMenu === "mega" ? "hoverMenu" : ""}`}> Mega menu</span>
                        <i className="bi bi-chevron-down ms-2"></i>
                        {activeMenu === "mega" && <div className='Hover-position-menu'> <MegaMenu /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setactiveMenu("page")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className='fonts-badges'>
                        <span className={`${activeMenu === "page" ? "hoverMenu" : ""}`}>Pages</span>
                        <i className="bi bi-chevron-down ms-2"></i>
                        {activeMenu === "page" && <div className='Hover-position-page '> <Pages /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setactiveMenu("account")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className='fonts-badges '>
                        <span className={`${activeMenu === "account" ? "hoverMenu" : ""}`}>Account</span>
                        <i className="bi bi-chevron-down ms-2"></i>
                        {activeMenu === "account" && <div className='Hover-position-account '> <Account /> </div>}
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#"
                    onMouseEnter={() => setactiveMenu("dash")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className={` fonts-badges ${activeMenu === "dash" ? "hoverMenu" : ""}`}>Dashboard</span>
                </a>
                <a className="navbar-brand fonts-badges" hovering-position href="#"
                    onMouseEnter={() => setactiveMenu("docs")}
                    onMouseLeave={() => setactiveMenu(null)} >
                    <span className='fonts-badges'>
                        <span className={`${activeMenu === "docs" ? "hoverMenu" : ""}`}>Docs</span>
                    </span>
                    {activeMenu === "docs" && <div className='Hover-position-doc '> <Docs /> </div>}
                </a>
            </div>
        </nav>
    )
}

export default Navbr
