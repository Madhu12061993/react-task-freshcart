import './css/PopularProducts.css';


const FreshCart = () => {
    return (
        <>
            <div className="d-flex flex-row justify-content-between mt-4">
                <div className="d-flex">
                    <p className="fs-4 fresh-font">
                        <i className="bi bi-cart4"></i>
                    </p>
                    <h3 className='ps-2 fw-bolder'>
                        FreshCart
                    </h3>
                </div>
                <div className='col-6 d-flex gap-2'>
                    <div
                        className='border search-box border-2 rounded-4  d-flex justify-content-between text-center '>
                        <input
                            className='border-0 ps-3 outline-input '
                            type="text"
                            placeholder="Search for products " />
                        <p className=' pe-4'>
                            <i className="bi bi-search"></i>
                        </p>
                    </div>
                    <div>
                        <button
                            className='d-flex py-2 p-1 px-4 gap-2 border-1 rounded-3 bg-transparent'>
                            <i className="bi bi-geo-alt"></i>
                            Location
                        </button>
                    </div>
                </div>
                <div className="d-flex gap-3">
                    <p className='fs-5 position-relative'>
                        <i className="bi bi-suit-heart">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill fonts-badge">
                                5
                                <span className="visually-hidden">
                                    unread messages
                                </span>
                            </span>
                        </i>
                    </p>
                    <p className='fs-5'>
                        <i className="bi bi-person"></i>
                    </p>
                    <p className='fs-5 position-relative '>
                        <i className="bi bi-bag">
                            <span className="position-absolute fonts-badge top-0 start-100 translate-middle badge rounded-pill">
                                1
                                <span className="visually-hidden">
                                    unread messages
                                </span>
                            </span>
                        </i>
                    </p>

                </div>
            </div>
        </>

    )
}

export default FreshCart
