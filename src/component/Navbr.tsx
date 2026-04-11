import './css/PopularProducts.css';


const Navbr = () => {
    return (
        <nav className="navbar navbar-light  ">
            <div className="container-fluid d-flex flex-row justify-content-start ">

                <button className="navbar-brand fs-6 btn-cick text-white d-flex gap-2 px-4 py-2 rounded-3 border-0" >
                    <i className="bi bi-ui-checks-grid"></i> All Departments</button>

                <a className="navbar-brand " href="#">
                    <span className='fonts-badges'>Home
                        <i className="bi bi-chevron-down ms-2"></i>
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Shop
                        <i className="bi bi-chevron-down ms-2"></i>
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Stores
                        <i className="bi bi-chevron-down ms-2"></i>
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Mega menu
                        <i className="bi bi-chevron-down ms-2"></i>
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Pages
                        <i className="bi bi-chevron-down ms-2"></i>
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Account
                        <i className="bi bi-chevron-down ms-2"></i>
                    </span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Dashboard</span>
                </a>
                <a className="navbar-brand fonts-badges" href="#">
                    <span className='fonts-badges'>Docs</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbr
