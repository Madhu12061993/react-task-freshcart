import { useEffect } from "react"
import * as bootstrap from "bootstrap"; 
import "./css/PopularProducts.css"

const PopularProductsHovered = () => {
  useEffect(() => {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );

  tooltipTriggerList.forEach((el) => {
     bootstrap.Tooltip.getOrCreateInstance(el)
    // new bootstrap.Tooltip(el);
  });
}, []);
  return (
    <div className="d-flex gap-1 card-positions">
      <button className="card px-2 py-1 align-self-center card-icons-hover"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Quick View" >
        <i className=" bi bi-eye"></i>

      </button>
      <button className="card px-2 py-1 align-self-center card-icons-hover"
       data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Wishlist">
        <i className="bi bi-heart"></i>

      </button>
      <button className="card px-2 py-1 align-self-center card-icons-hover"
       data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Compare">
        <i className="bi bi-arrow-left-right"></i>

      </button>

    </div>

  )
}

export default PopularProductsHovered