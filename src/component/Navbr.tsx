import './css/PopularProducts.css';


const Navbr = () => {
    return (
        <>
            <div className="">
                <nav className="navbar navbar-light  ">
                    <div className="container-fluid d-flex ">

                        <button className="navbar-brand fs-6 fonts-badge text-white d-flex gap-2 px-4 py-2 rounded-3 border-0" >  <i className="bi bi-ui-checks-grid"></i> All Departments</button>

                        <p className='m-0 px-0'> <a className="navbar-brand " href="#"><span className='fonts-badges'>Home <i className="bi bi-chevron-down"></i></span> </a></p>
                        <p className='m-0 px-0'> <a className="navbar-brand fonts-badges" href="#"><span className='fonts-badges'>Shop <i className="bi bi-chevron-down"></i></span> </a></p>
                        <p className='m-0 px-0'> <a className="navbar-brand fonts-badges" href="#"><span className='fonts-badges'>Stores <i className="bi bi-chevron-down"></i></span> </a></p>
                        <p className='m-0 px-0'> <a className="navbar-brand fonts-badges" href="#"><span className='fonts-badges'>Mega menu <i className="bi bi-chevron-down"></i></span> </a></p>
                        <p className='m-0 px-0'> <a className="navbar-brand fonts-badges" href="#"><span className='fonts-badges'>Pages <i className="bi bi-chevron-down"></i></span> </a></p>
                        <p className='m-0 px-0'> <a className="navbar-brand fonts-badges" href="#"><span className='fonts-badges'>Account <i className="bi bi-chevron-down"></i> </span></a></p>
                        <p className='m-0 px-0'> <a className="navbar-brand fonts-badges" href="#"><span className='fonts-badges'>Dashboard</span></a></p>
                        <p className='m-0 px-0'> <a className="navbar-brand fonts-badges" href="#"><span className='fonts-badges'>Docs</span></a></p>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default Navbr
