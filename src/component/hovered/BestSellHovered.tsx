import * as bootstrap from "bootstrap";
import { useEffect } from "react";



const BestSellHovered = () => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach((el) => {
      new bootstrap.Tooltip(el);
    });
  }, []);
  return (
    <div className="d-flex gap-1 card-position">
      <button className="card px-2 py-1 align-self-center card-icon-hover"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Quick View">
        <i className=" bi bi-eye"></i>

      </button>
      <button className="card px-2 py-1 align-self-center card-icon-hover"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Wishlist">
        <i className="bi bi-heart"></i>

      </button>
      <button className="card px-2 py-1 align-self-center card-icon-hover"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="Quick View" >
        <i className="bi bi-arrow-left-right"></i>

      </button>
    </div>

  )
}

export default BestSellHovered