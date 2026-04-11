import coffeeBeans from '../assets/bestsells/sell-1.jpg';
import groundcoffee from '../assets/bestsells/sell-2.jpg';
import crushedTomatoes from '../assets/bestsells/sell-3.jpg';
import pineapple from '../assets/bestsells/sell-4.jpg';
import './css/PopularProducts.css';


const BestSells = () => {
  return (
    <>
      <div className='best-sell'>
        <h3 className='mt-5 '>Daily Best Sells</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          {/* col-1 */}
          <div className="col ">
            <div className="card custom-card h-100 w-100">
              <img src={coffeeBeans} className="card-img-top" alt="coffeeBeans" />
              <div className="card-img-overlay ms-4 text-white d-flex flex-column ">
                <h6 className="card-title fs-4  fw-bolder">100% Organic Coffee Beans.</h6>
                <p className="card-text ">Get the best deal before close.</p>
                <div className='w-100 d-block m-0'>
                  <button className=' rounded-2 p-2 px-3   border-0 fw-900 text-white bgclor'> Shop Now <i className="bi bi-arrow-right-short"></i></button>
                </div>
              </div>
            </div>
          </div>
          {/* col-2 */}

          <div className="col">
            <div className="card h-100 rounded-3">
              <img src={groundcoffee} className="card-img-top m-0 " alt="groundcoffee" />
              <div className="card-body  m-0">
                <p className="card-text text-muted m-1 fontChange" >Tea, Coffee & Drinks</p>
                <p className="card-title text-bold fw-bolder fontChange body m-1 ">Roast Ground Coffee</p>
                <div className='d-flex justify-content-between '>
                  <div>
                    <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>13</span>
                    <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>18</span>
                  </div>
                  <div>
                    <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5</span> </p>
                  </div>
                </div>
                <div>
                  <button className='addbtn p-2 rounded-3 w-100 text-white fw-bolder'> <i className="bi bi-plus"></i> Add to cart</button>
                </div>
                <div className="row mt-3  justify-content-center text-center ">
                  <div className="col-3   px-1">
                    <div className='card mx-0 p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>914</span>
                      <span className='fntsze text-muted'>Days</span>
                    </div>

                  </div>
                  <div className="col-3  px-1 ">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>14</span>
                      <span className='fntsze text-muted'>Hours</span>
                    </div>
                  </div>
                  <div className="col-3 px-1">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>47</span>
                      <span className='fntsze text-muted'>Mins</span>
                    </div>
                  </div>

                </div>
                <div className="row   justify-content-center text-center">
                  <div className="col-3 mt-2 px-1">
                    <div className='card p-2  text-center d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>45</span>
                      <span className='fntsze text-muted'>Sec</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col-3 */}

          <div className="col">
            <div className="card h-100 rounded-3">
              <img src={crushedTomatoes} className="card-img-top m-0 " alt="crushedTomatoes" />
              <div className="card-body  m-0">
                <p className="card-text text-muted m-1 fontChange" >Fruits & Vegetables</p>
                <p className="card-title text-bold fw-bolder fontChange body m-1 ">Crushed Tomatoes</p>
                <div className='d-flex justify-content-between '>
                  <div>
                    <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>13</span>
                    <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>18</span>
                  </div>
                  <div>
                    <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5</span> </p>
                  </div>
                </div>
                <div>
                  <button className='addbtn p-2 rounded-3 w-100 text-white fw-bolder'> <i className="bi bi-plus"></i> Add to cart</button>
                </div>
                <div className="row mt-3 justify-content-center text-center">
                  <div className="col-3 px-1">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>974</span>
                      <span className='fntsze text-muted'>Days</span>
                    </div>

                  </div>
                  <div className="col-3 px-1">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>15</span>
                      <span className='fntsze text-muted'>Hours</span>
                    </div>
                  </div>
                  <div className="col-3 px-1">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>45</span>
                      <span className='fntsze text-muted'>Mins</span>
                    </div>
                  </div>

                  <div className="row   justify-content-center text-center">
                    <div className="col-3 mt-2 px-1">
                      <div className='card p-2  text-center d-flex flex-column align-item-center justify-content-center'>
                        <span className='fntsze fw-bolder'>45</span>
                        <span className='fntsze text-muted'>Sec</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* col-4*/}

          <div className="col">
            <div className="card h-100 rounded-3">
              <img src={pineapple} className="card-img-top m-0 " alt="pineapple" />
              <div className="card-body  m-0">
                <p className="card-text text-muted m-1 fontChange" >Fruits & Vegetables</p>
                <p className="card-title text-bold fw-bolder fontChange body m-1 ">Golden Pineapple</p>
                <div className='d-flex justify-content-between '>
                  <div>
                    <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>13</span>
                    <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>18</span>
                  </div>
                  <div>
                    <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5</span> </p>
                  </div>
                </div>
                <div>
                  <button className='addbtn p-2 rounded-3 w-100 text-white fw-bolder'> <i className="bi bi-plus"></i> Add to cart</button>
                </div>
                <div className="row mt-3  justify-content-center text-center">
                  <div className="col-3 px-1">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>946</span>
                      <span className='fntsze text-muted'>Days</span>
                    </div>

                  </div>
                  <div className="col-3 px-1 ">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>15</span>
                      <span className='fntsze text-muted'>Hours</span>
                    </div>
                  </div>
                  <div className="col-3 px-1">
                    <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>43</span>
                      <span className='fntsze text-muted'>Mins</span>
                    </div>
                  </div>

                </div>
                <div className="row   justify-content-center text-center">
                  <div className="col-3 mt-2 px-1">
                    <div className='card p-2  text-center d-flex flex-column align-item-center justify-content-center'>
                      <span className='fntsze fw-bolder'>45</span>
                      <span className='fntsze text-muted'>Sec</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >
    </>
  )
}

export default BestSells


{/* <figure class="figure">
  <img src="..." class="figure-img img-fluid rounded" alt="...">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure> */}