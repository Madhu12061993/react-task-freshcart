import './css/PopularProducts.css';


const Final = () => {
    return (
        <>
            <div className="row mt-5">
                <div className="col">
                    <p className="bootstrap-iconeer"><i className="bi bi-clock"></i></p>
                    <p className=' final-font'>10 minute grocery now</p>
                    <p className='font-para text-muted'>Get your order delivered to your doorstep at the earliest from <br/> FreshCart pickup stores near you.</p>
                </div>
                <div className="col">
                    <p className=" bootstrap-iconeer"> <i className="bi bi-gift"></i></p>
                    <p className=' final-font'>Best Prices & Offers</p>
                    <p className='font-para text-muted'>Cheaper prices than your local supermarket, great cashback offers <br/> to top it off. Get best pricess & offers.</p>
                </div>
                <div className="col">
                    <p className=" bootstrap-iconeer"><i className="bi bi-box"></i></p>
                    <p className=' final-font' >Wide Assortment</p>
                    <p className='font-para text-muted'>Choose from 5000+ products across food, personal care, household,<br/> bakery, veg and non-veg & other categories.</p>
                </div>
                <div className="col">
                    <p className=" bootstrap-iconeer"><i className="bi bi-arrow-repeat"></i></p>
                    <p className=' final-font' >Easy Returns</p>
                    <p className='font-para text-muted '>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked <span className='policy'>policy</span> .</p>
                </div>
            </div>
        </>
    )
}

export default Final
