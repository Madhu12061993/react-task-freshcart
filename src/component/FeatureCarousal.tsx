import dairyBread from '../assets/featured/1/category-dairy-bread-eggs.jpg';
// import corn  from "../assets/featured/1/category-instant-food.jpg";
// import oreoBuiscut from "../assets/featured/1/category-bakery-biscuits.jpg";
// import lays from "../assets/featured/1/category-snack-munchies.jpg";
// import atta from "../assets/featured/2/category-atta-rice-dal.jpg";
// import pampers from "../assets/featured/2/category-baby-care.jpg";
// import chicken from "../assets/featured/2/category-chicken-meat-fish.jpg";
// import teaCoffee from "../assets/featured/2/category-tea-coffee-drinks.jpg";
// import surfExcel from "../assets/featured/3/category-cleaning-essentials.jpg";
// import pet from "../assets/featured/3/category-pet-care.jpg";


const FeatureCarousal = () => {
  return (
   <>
   <h4>Featured Categories</h4>
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={dairyBread} className="d-block w-50" alt="dairyBread"/>
    </div>
    <div className="carousel-item">
      <img src={dairyBread} className="d-block w-50" alt="dairyBread"/>
    </div>
    <div className="carousel-item">
      <img src={dairyBread} className="d-block w-50" alt="dairyBread"/>
    </div>
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
   </>
  )
}

export default FeatureCarousal
