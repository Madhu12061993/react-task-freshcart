import { useState } from "react"
import "../../css/PopularProducts.css";
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

const NavbarHovered = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2"
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        {department.map((item, index) => (
          <button key={index}
            className={`border-0  rounded- 2 text-start ms-2 text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
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
  const [isHovered, setisHovered] = useState(false);
  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2"
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        {home.map((item, index) => (
          <button key={index}
            className={`border-0  rounded- 2 text-start  text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
            <p>{item}</p>
          </button>
        ))}
      </div>
    </>
  );
};


export const Shop = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2"
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        {shop.map((item, index) => (
          <button key={index}
            className={`border-0  rounded- 2 text-start ms-2 text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
            <p>{item}</p>
          </button>
        ))}
      </div>
    </>
  );
};


export const Stores = () => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2"
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        {stores.map((item, index) => (
          <button key={index}
            className={`border-0  rounded- 2 text-start ms-2 text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
            <p>{item}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export const MegaMenu = () => {
  return (
    <>
      <div className="container-fluid bg-info">
        <div>sdd</div>
        <div>ss</div>
        <div>ss</div>
        <div>ss</div>
      </div>
    </>
  );
};


export const Pages = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2"
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        {pages.map((item, index) => (
          <button key={index}
            className={`border-0  rounded- 2 text-start ms-2 text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
            <p>{item}</p>
          </button>
        ))}
      </div>

    </>

  );
};

export const Account = () => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2"
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        {account.map((item, index) => (
          <button key={index}
            className={`border-0  rounded- 2 text-start ms-2 text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
            <p>{item}</p>
          </button>
        ))}
      </div>

    </>
  );
};

export const Docs = () => {
  const [isHovered, setisHovered] = useState(false);

  return (
    <>
      <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2 gap-4 "
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        <button className={`d-flex gap-2 border-0 ${isHovered ? "hover-background" : "bg-white"}`}>
          <i className="bi bi-journal-text"></i>
          <div className="d-flex flex-column text-start">
            <small className="docs-size">Documentations</small>
            <small className="Docs-Size text-muted">Browse the all documentation</small>
          </div>
        </button>
        <button className={`d-flex gap-2 border-0 ${isHovered ? "hover-background" : "bg-white"}`}>
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

