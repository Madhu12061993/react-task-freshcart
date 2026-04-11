import slideOne from '../assets/slide-1.jpg';
import slideTwo from '../assets/slide-2.jpg';

const data = [
  {
    title: "Super Market For Grocery",
    subTitle: "hkckhd",
    imageUrl: slideOne,
    LabelText: "bhdbhkd"
  },
  {
    title: "Super Market For Grocery",
    subTitle: "hkckhd",
    imageUrl: slideTwo,
    LabelText: "bhdbhkd"
  }
];

const Carousal = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className ="carousel slide mt-4"
      data-bs-ride ="carousel"
    >
      <div className="carousel-inner">
        {data.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="card text-bg-dark border-0">
              <img
                src={item.imageUrl}
                className="d-block w-100"
                alt="slide"
              />
            </div>

            <div className="card-img-overlay">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small>Last updated 3 mins ago</small></p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Carousal;