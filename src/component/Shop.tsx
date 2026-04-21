import vegetable from '../assets/Shop/grocery-banner.png';
import bun from '../assets/Shop/grocery-banner-2.jpg';
import './css/PopularProducts.css'

const Shop = () => {
  return (
    <>
      <div className='row row-cols-1 row-cols-md-2 my-5'>
        <div className="card border-0 ">
          <img src={vegetable} className="card-img" alt="vegetable" />
          <div className="card-img-overlay ms-4 d-flex flex-column justify-content-center">
            <h5 className="card-title fs-3 text-black fw-bolder">Fruits & Vegetables</h5>
            <p className="card-text">Get Upto 30% Off</p>
            <div className='w-100 d-block'>
              <button className='bg-black rounded-2 p-2 px-3 fw-900 text-white'>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="card border-0 ">
          <img src={bun} className="card-img" alt="bun" />
          <div className="card-img-overlay ms-4  d-flex flex-column justify-content-center">
            <h5 className="card-title fs-3 text-black fw-bolder">Freshly Baked Buns</h5>
            <p className="card-text">Get Upto 25% Off</p>
            <div className='w-100 d-block'>
              <button className='bg-black rounded-2 p-2 px-3 fw-900 text-white'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Shop;
