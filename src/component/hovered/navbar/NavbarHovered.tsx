import { useState } from "react"
import "../../css/PopularProducts.css";
import vegetableBasket from "../../../assets/navhover/basket-full-vegetables.jpg";


const department = [
  "Dairy, Bread & Eggs",
  "Snacks & Munchies",
  "Fruits & Vegetables",
  "Cold Drinks & Juices",
  "Breakfast & Instant Food",
  "Bakery & Biscuits",
  "Chicken, Meat & Fish",
];
const home = [
  "Home 1",
  "Home 2",
  "Home 3",
  "Home 4",
  "Home 5",

];
const shop = [
  "Shop Grid - Filter",
  "Shop Grid - 3 column",
  "Shop List - Filter",
  "Shop - Filter",
  "Shop Wide",
  "Shop Single",
  "Shop Single v2",
  "Shop Wishlist",
  "Shop Cart",
  "Shop Checkout",
];
const stores = [
  "Store List",
  "Store Single",
  "Store Grid",
]


const pages = [
  "Blog",
  "Blog Single",
  "Blog Category",
  "About us",
  "404 Error",
  "Contact",
]

const account = [
  "Sign in",
  "Signup",
  "Forgot Password",
  "My Account",
];
const menuEggs = [
  "Butter",
  "Milk Drinks",
  "Curd & Yogurt",
  "Eggs",
  "Buns & Bakery",
  "Cheese",
  "Condensed Milk",
  "Dairy Products",
];

const menuBreakfast = [
  " Breakfast Cereal",
  "Noodles, Pasta & Soup",
  "Frozen Veg Snacks",
  "Frozen Non-Veg Snacks",
  "Vermicelli",
  "Instant Mixes",
  "Batter",
  "Fruit and Juices",
];
const menuDrinks = [
  " Soft Drinks",
  "Fruit Juices",
  "Coldpress",
  "Water & Ice Cubes",
  "Soda & Mixers",
  "Health Drinks",
  "Herbal Drinks",
  "Milk Drinks",
];

const NavbarHovered = () => {
  const [isHovered, setisHovered] = useState<number | null>(null);
  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2">
        {department.map((item, index) => (
          <button key={index}
            className={`border-0  rounded-2 text-start ms-2 text-muted ${isHovered === index ? "hover-background" : "bg-white"}`}
            onMouseEnter={() => setisHovered(index)}
            onMouseLeave={() => setisHovered(null)}>
            <small>{item}</small>
          </button>
        ))}
      </div>
    </>

  )
}

export default NavbarHovered;


// home component
export const Home = () => {
  const [isHovered, setisHovered] = useState<number | null>(null);
  return (
    <>
      <div className=" card border-0 rounded-1 bg-white text-dark hover-childPosition p-2">
        {home.map((item, index) => (
          <button key={index}
            className={`border-0  rounded-2 text-start  text-muted  ${isHovered === index ? "hover-background" : "bg-white"}`}
            onMouseEnter={() => setisHovered(index)}
            onMouseLeave={() => setisHovered(null)}>

            <p className="py-2 m-0 ">{item}</p>
          </button>
        ))}
      </div>
    </>
  );
};


export const Shop = () => {
  const [isHovered, setisHovered] = useState<number | null>(null);
  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2">
        {shop.map((item, index) => (
          <button key={index}
            className={`border-0  rounded-2 text-start ms-2 text-muted ${isHovered === index ? "hover-background" : "bg-white"}`}
            onMouseEnter={() => setisHovered(index)}
            onMouseLeave={() => setisHovered(null)}>
            <p className=" m-0 m-2">{item}</p>
          </button>
        ))}
      </div>
    </>
  );
};


export const Stores = () => {
  const [isHovered, setisHovered] = useState<number | null>(null);

  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2">
        {stores.map((item, index) => (
          <button key={index}
            className={`border-0  rounded-2 text-start ms-2 text-muted ${isHovered === index ? "hover-background" : "bg-white"}`}
            onMouseEnter={() => setisHovered(index)}
            onMouseLeave={() => setisHovered(null)}>
            <p className="m-0 m-2">{item}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export const MegaMenu = () => {
  const [isHovered, setisHovered] = useState<{col:number ; index:number} | null>(null);

  return (
    <>
      <div className="card border-0">
        <div className="container-fluid bg-white ">
          <div className=" d-flex justify-content-between m-4">
            <div className="col  mt-4">
              <p className="border-0 menu-button m-0 m-1">Dairy, Bread & Eggs</p>
              {menuEggs.map((item, index) => (
                <div className="menu-lineheight" >
                  <button key={index} className={`border-0 rounded-2 ${isHovered?.col === 0 && isHovered?.index === index ? "text-success hover-background" : "bg-white"}`}
                    onMouseEnter={() => setisHovered({col:0 , index})}
                    onMouseLeave={() => setisHovered(null)}>{item}</button>
                </div>
              ))}

            </div>
            <div className="col mt-4 ">
              <p className="border-0 menu-button m-0 m-1">Breakfast & Instant Food</p>
              {menuBreakfast.map((item, index) => (
                <div className="menu-lineheight">
                  <button key={index} className={`border-0 rounded-2 ${isHovered?.col === 1 && isHovered?.index === index ? "text-success hover-background" : "bg-white"}`}
                    onMouseEnter={() => setisHovered({col:1 , index})}
                    onMouseLeave={() => setisHovered(null)}>
                    {item}
                  </button>
                </div>
              ))}
            </div>
            <div className="col mt-4 ">
              <p className="border-0 menu-button  m-0 m-1">Cold Drinks & Juices</p>
              {menuDrinks.map((item, index) => (
                <div className="menu-lineheight">
                  <button key={index} className={`border-0 rounded-2 ${isHovered?.col === 2 && isHovered?.index === index ? "text-success hover-background" : "bg-white"}`}
                    onMouseEnter={() => setisHovered({col:2 , index})}
                    onMouseLeave={() => setisHovered(null)}>
                    {item}
                  </button>
                </div>
              ))}
            </div>
            <div className="col menu-img mt-4">
              <div className="card  text-white border-0 ">
                <img src={vegetableBasket} className="card-img" alt="vegetableBasket" />
                <div className="card-img-overlay d-flex justify-content-between mt-3 mx-2">
                  <div>
                    <p className="card-title text-dark menu-title">Dont miss this <br /> offer today.</p>
                    <button className="border-0 rounded-2 p-1 px-3 fw-bolder text-white menu-btn-bg mt-1 text-center"><small>Shop Now</small></button>
                  </div>
                  <div className="menu-img-color">
                    <p className="card-text text-dark  p-3 ">25% <br /> Off </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};


export const Pages = () => {
  const [isHovered, setisHovered] = useState<number | null>(null);
  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2">
        {pages.map((item, index) => (
          <button key={index}
            className={`border-0  rounded-2 text-start ms-2 text-muted ${isHovered === index ? "hover-background" : "bg-white"}`}
            onMouseEnter={() => setisHovered(index)}
            onMouseLeave={() => setisHovered(null)}>
            <p className="m-0 m-2">{item}</p>
          </button>
        ))}
      </div>

    </>

  );
};

export const Account = () => {
  const [isHovered, setisHovered] = useState<number | null>(null);

  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2">
        {account.map((item, index) => (
          <button key={index}
            className={`border-0  rounded-2 text-start ms-2 text-muted ${isHovered === index ? "hover-background" : "bg-white"}`}
            onMouseEnter={() => setisHovered(index)}
            onMouseLeave={() => setisHovered(null)}>
            <p className="m-0 m-2">{item}</p>
          </button>
        ))}
      </div>

    </>
  );
};

export const Docs = () => {
  const [isHovered, setisHovered] = useState<number | null>(null);

  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2 gap-4 ">
        <button className={`d-flex gap-2 border-0 rounded-2 ${isHovered === 0 ? "hover-background" : "bg-white"}`}
          onMouseEnter={() => setisHovered(0)}
          onMouseLeave={() => setisHovered(null)}>
          <i className="bi bi-journal-text"></i>
          <div className="d-flex flex-column text-start">
            <small className="docs-size">Documentations</small>
            <small className="Docs-Size text-muted">Browse the all documentation</small>
          </div>
        </button>
        <button className={`d-flex gap-2 border-0 rounded-2 ${isHovered === 1 ? "hover-background" : "bg-white"}`}
          onMouseEnter={() => setisHovered(1)}
          onMouseLeave={() => setisHovered(null)}>
          <i className="bi bi-layers"></i>
          <div className="d-flex flex-column text-start ">
            <small className="docs-size">Changelog <span className="text-success">v1.4.2</span> </small>
            <small className="Docs-Size text-muted">See what's new</small>
          </div>

        </button>
      </div>

    </>
  );
};

