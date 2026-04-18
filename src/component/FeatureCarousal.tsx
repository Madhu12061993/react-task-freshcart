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
import Carousal from './Carousal';
import { useState } from 'react';


interface Carousal {
  imagUrl: string;
  title: string;
}
const datas: Carousal[] = [{
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
const dataArr = (arr: Carousal[], size: number) => {
  const result: Carousal[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    
    if (chunk.length < size && result.length > 0) {
      const prev = result[result.length - 1];
      chunk = [...prev.slice(size-(size-chunk.length)) , ...chunk];
    }
    result.push(chunk);
  }
  return result;
}

const groupData = dataArr(datas, 4);
const FeatureCarousal = () => {
  const [isHovered , setisHovered] = useState(false);
  return (
    <>

      <div className='mt-5'>
        <h4>Featured Categories</h4>
        <div id="carouselExampleControls" className="carousel slide position-relative" data-bs-ride="carousel">
          <div className="carousel-inner">
            {groupData.map((group, i) => (

              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""} `}>
                <div className='row row-cols-1 row-cols-md-4  '>
                  {group.map((item, index) => (
                    <div key={index} className="col">
                      <div className={`card ${isHovered ? "border-success" : ""}`}
                       onMouseEnter={() => setisHovered(true)} 
                       onMouseLeave={() => setisHovered(false)}>
                        <figure className="figure text-center ">
                          <img src={item.imagUrl} className="figure-img img-fluid rounded" alt={item.title} />
                          <figcaption className="figure-caption">{item.title}</figcaption>
                        </figure>
                      </div>

                    </div>
                  ))}
                </div>
              </div>

            ))}
          </div>
        </div>

      </div>
      <div className='position-relative start-0 end-0 d-flex gap-2 mt-2 me-2'>
        <button className="carousel-control-prev  bg-info" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next bg-info " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon  " aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default FeatureCarousal

