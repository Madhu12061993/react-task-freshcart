import './css/PopularProducts.css';


const FreshCart = () => {
    return (
        <>
            <div className="d-flex flex-row justify-content-between mt-4">
                <div className="d-flex">
                    <p className="fs-4 fresh-font"> <i className="bi bi-cart4"></i></p>
                    <h3 className='ps-2 fw-bolder'>FreshCart</h3>
                </div>
                <div>
                    <div className='border border-2 '>
                        <input className='border-0 ' type="text" placeholder="Search for products " />
                        <i className="bi bi-search"></i>

                    </div>
                    <button> <i className="bi bi-geo-alt"></i> Location</button>
                </div>
                <div className="d-flex">
                    <p><i className="bi bi-suit-heart"></i></p>
                    <p><i className="bi bi-person"></i></p>
                    <p><i className="bi bi-bag"></i></p>

                </div>
            </div>
        </>

    )
}

export default FreshCart
