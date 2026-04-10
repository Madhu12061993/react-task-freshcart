import sev from '../assets/products/product-img-7.jpg'
import './css/PopularProducts.css';
import nutrichoice from '../assets/products/product-img-2.jpg';
import Act2 from '../assets/products/product-img-5.jpg';
import amul from '../assets/products/product-img-13.jpg';
import millate from '../assets/products/product-img-12.jpg';
import corn from '../assets/products/product-img-10.jpg';
import cheese from '../assets/products/product-img-9.jpg';
import epigamia from '../assets/products/product-img-8.jpg';
import lays from '../assets/products/product-img-4.jpg';
import fivestar from '../assets/products/product-img-3.jpg';



const PopularProducts = () => {
    return (
        <>
            <div className='my-5 pt-5'>
                <h4>Popular Products</h4>
                <div className="row row-cols-1 row-cols-md-5 g-4 mt-1">
                    {/* col-1-sev */}
                    <div className="col">                        
                        <div className="card  rounded-3">
                            <div className='w-100 d-block ' >
                            <span className=' badge bg-danger stale '>sale</span>
                        </div>
                            <img src={sev} className="card-img-top m-0 imgSize " alt="sev" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Snack & Munchies.</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Haldiram's Sev Bhujia</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(149)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>18</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>24</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-2 nutribuiscut */}
                     <div className="col">                        
                        <div className="card  rounded-3">
                            <div className='w-100 d-block ' >
                            <span className=' badge bg-success stale '>14%</span>
                        </div>
                            <img src={nutrichoice} className="card-img-top m-0  " alt="nutrichoice" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Bakery & Biscuits</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">NutriChoice Digestive</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(25)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>24</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-3 5 star */}
                     <div className="col">                        
                        <div className="card h-100 rounded-3">
                            <img src={fivestar} className="card-img-top m-0 " alt="fivestar" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Bakery & Biscuits</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Cadbury 5 Star Chocolate</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(469)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>32</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>35</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-4 lays */}
                     <div className="col">                        
                        <div className="card  rounded-3">
                            <div className='w-100 d-block ' >
                            <span className=' badge bg-danger stale '>Hot</span>
                        </div>
                            <img src={lays} className="card-img-top m-0 " alt="lays" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Snack & Munchies</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Onion Flavour Potato</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(456)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>3</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>5</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-5-act2 */}
                     <div className="col">                        
                        <div className="card h-100 rounded-3">                           
                            <img src={Act2} className="card-img-top m-0 " alt="act2" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Instant Food</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Salted Instant Popcorn</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(39)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>13</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>18</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-6-epigamuia */}
                    
                     <div className="col">                        
                        <div className="card  rounded-3">
                            <div className='w-100 d-block ' >
                            <span className=' badge bg-danger stale '>sale</span>
                        </div>
                            <img src={epigamia} className="card-img-top m-0 " alt="epigamia" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Dairy, Bread & Eggs</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Blueberry Greek Yogurt</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(189)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>18</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>24</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-7-cheese */}

                     <div className="col">                        
                        <div className="card h-100 rounded-3">                            
                            <img src={cheese} className="card-img-top m-0 " alt="cheese" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Dairy, Bread & Eggs</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Britannia Cheese Slices</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(345)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>24</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-8-corn */}
                    
                     <div className="col">                        
                        <div className="card h-100 rounded-3">                           
                            <img src={corn} className="card-img-top m-0 " alt="corn" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Instant Food</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Kellogg's Original Cereals</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(90)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>32</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>35</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-9-millet */}
                     <div className="col">                        
                        <div className="card h-100 rounded-3">                            
                            <img src={millate} className="card-img-top m-0 " alt="millate" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Snack & Munchies</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Slurrp Millet Chocolate</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(67)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>3</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>5</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* col-10-millet */}

                     <div className="col">                        
                        <div className="card h-100 rounded-3">                            
                            <img src={amul} className="card-img-top m-0 " alt="amul" />
                            <div className="card-body  m-0">
                                <p className="card-text text-muted m-0 fontChange" >Dairy, Bread & Eggs</p>
                                <p className="card-title text-bold fw-bolder fontChange body m-0 ">Amul Butter - 500 g</p>
                                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>4.5(89)</span> </p>
                                <div className='d-flex justify-content-between '>
                                    <div>
                                        <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>13</span>
                                        <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>18</span>
                                    </div>
                                    <div>
                                        <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                                                                                                               
                </div>
            </div>
        </>

    )
}

export default PopularProducts;

// card with background img
{/* <div class="card bg-dark text-white">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div> */}



