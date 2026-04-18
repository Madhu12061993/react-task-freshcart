import { useState } from "react"
import "../css/PopularProducts.css";

const department = [
  "Dairy, Bread & Eggs",
  "Snacks & Munchies",
  "Fruits & Vegetables",
  "Cold Drinks & Juices",
  "Breakfast & Instant Food",
  "Bakery & Biscuits",
  "Chicken, Meat & Fish",
];
const home =[
"Home 1",
"Home 2",
"Home 3",
"Home 4",
"Home 5",

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
            className={`border-0  rounded- 2 text-start text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
            <small>{item}</small>
          </button>
        ))}
      </div>
    </>

  )
}

export default NavbarHovered;


// home component
export  const Home = () => {
  const [isHovered , setisHovered] = useState(false);
  return (
    <>
    <div className="card">madhubala</div>
    {/* <div className=" card border-0 rounde-1 bg-white text-dark hover-childPosition p-2"
        onMouseEnter={() => setisHovered(true)}
        onMouseLeave={() => setisHovered(false)}>
        {home.map((item, index) => (
          <button key={index}
            className={`border-0  rounded- 2 text-start text-muted ${isHovered ? "hover-background" : "bg-white"}`} >
            <small>{item}</small>
          </button>
        ))}
      </div> */}
    </>
  );
}
 