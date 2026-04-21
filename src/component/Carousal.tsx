import slideOne from '../assets/slide-1.jpg';
import slideTwo from '../assets/slide-2.jpg';
import './css/PopularProducts.css';

const data = [
  {
    title: "SuperMarket For Fresh Grocery",
    subTitle: "Introduced a new model for online grocery and convenient home delivery",
    imageUrl: slideOne,
    LabelText: "Opening Sale Discount 50%",
  },
  {
    title: "Free Shipping on orders over $100",
    subTitle: "Free Shipping to First-Time Customers Only, After promotions and discounts are applied.",
    imageUrl: slideTwo,
    LabelText: "Free Shipping - orders over $100"
  }
];

const Carousal = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide mt-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {data.map((item, index) => (  
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="card  bg-dark border-0">
              <img
                src={item.imageUrl}
                className="d-block w-100"
                alt="slide"
              />
            </div>

            <div className="card-img-overlay overlayPositin">
              <p className="card-text bg-warning d-inline p-1 pt-0 fw-bold rounded-1 label-font">{item.LabelText}</p>
              <p className="card-title fs-1 fw-bold" >{item.title}</p>
              <p className="card-text fs-5 text-muted  ">{item.subTitle}</p>
              <button className='text-white bg-dark p-2 rounded-3 px-3 fw-bold'> <small>Shop Now <i className="bi bi-arrow-right-short"></i></small> </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Carousal;