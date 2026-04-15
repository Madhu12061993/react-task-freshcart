import dairyBread from '../assets/featured/1/category-dairy-bread-eggs.jpg';
import corn from "../assets/featured/1/category-instant-food.jpg";
import oreoBuiscut from "../assets/featured/1/category-bakery-biscuits.jpg";
import lays from "../assets/featured/1/category-snack-munchies.jpg";
import atta from "../assets/featured/2/category-atta-rice-dal.jpg";
import pampers from "../assets/featured/2/category-baby-care.jpg";
import chicken from "../assets/featured/2/category-chicken-meat-fish.jpg";
import teaCoffee from "../assets/featured/2/category-tea-coffee-drinks.jpg";
import surfExcel from "../assets/featured/3/category-cleaning-essentials.jpg";
import pet from "../assets/featured/3/category-pet-care.jpg";


const datas = [{
  imagUrl: dairyBread,
  title: 'Dairy, Bread & Eggs'
},
{
  imagUrl: lays,
  title: 'Snack & Munchies'
},
{
  imagUrl: oreoBuiscut,
  title: 'Bakery & Biscuits'
},
{
  imagUrl: corn,
  title: 'Instant Food'
},
{
  imagUrl: teaCoffee,
  title: 'Tea, Coffee & Drinks'
},
{
  imagUrl: atta,
  title: 'Atta, Rice & Dal'
},
{
  imagUrl: pampers,
  title: 'Baby Care'
},
{
  imagUrl: chicken,
  title: 'Chicken, Meat & Fish'
},
{
  imagUrl: surfExcel,
  title: 'Cleaning Essentials'
},
{
  imagUrl: pet,
  title: 'Pet Care'
}

];
const FeatureCarousal = () => {
  return (
    <>
      {/* <div className="row row-cols-1 row-cols-md-5 g-4 mt-1">
        {/* col-1-sev */}
      {/* {datas.map((item, index) => (
          <div key={index} className="col">
            <div className="card  rounded-3">
              <div className='w-100 d-block ' >
                <span className=' badge bg-danger stale '>{item.text}</span>
              </div>
              <img src={item.imgUrl} className="card-img-top m-0 imgSize " alt="sev" />
              <div className="card-body  m-0">
                <p className="card-text text-muted m-0 fontChange" >{item.subTitle}</p>
                <p className="card-title text-bold fw-bolder fontChange body m-0 ">{item.title}</p>
                <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>{item.starValue}</span> </p>
                <div className='d-flex justify-content-between '>
                  <div>
                    <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>{item.dallarValue}</span>
                    {item.dallarNumber ? <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>{item.dallarNumber}</span> : ""}
                  </div>
                  <div>
                    <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> {item.button}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))} */}

      {/* </div> */}
      <div className='mt-5'>
        <h4>Featured Categories</h4>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="row row-cols-1 row-cols-md-4 g-2 mt-1">
              <div className="col">
                {datas.map((items, index) => (

                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""} `}>
                    <div className="card">
                      <figure className="figure text-center ">
                        <img src={items.imagUrl} className="figure-img img-fluid rounded" alt="dairyBread" />
                        <figcaption className="figure-caption">{items.title}</figcaption>
                      </figure>
                    </div>
                  </div>

                ))}
              </div>
            </div>

            {/* // <div key={index} className={`carousel-item ${index === 0 ? "active" : ""} `}>
              //   <div className="row row-cols-4">
              //     <div className="card"><figure className="figure text-center ">
              //       <img src={item.imagUrl} className="figure-img img-fluid rounded" alt="dairyBread" />
              //       <figcaption className="figure-caption">{item.title}</figcaption>
              //     </figure></div>
              //     <div className="card"><figure className="figure text-center ">
              //       <img src={item.imagUrl} className="figure-img img-fluid rounded" alt="dairyBread" />
              //       <figcaption className="figure-caption">{item.title}</figcaption>
              //     </figure></div>
              //     <div className="card"><figure className="figure text-center">
              //       <img src={item.imagUrl} className="figure-img img-fluid rounded" alt="dairyBread" />
              //       <figcaption className="figure-caption">{item.title}</figcaption>
              //     </figure></div>
              //     <div className="card"><figure className="figure text-center ">
              //       <img src={item.imagUrl} className="figure-img img-fluid rounded" alt="dairyBread" />
              //       <figcaption className="figure-caption">{item.title}</figcaption>
              //     </figure></div>
              //   </div>
              // </div>
           */}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div >

    </>
  )
}

export default FeatureCarousal
