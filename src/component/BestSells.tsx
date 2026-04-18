import { useState } from 'react';
import coffeeBeans from '../assets/bestsells/sell-1.jpg';
import groundcoffee from '../assets/bestsells/sell-2.jpg';
import crushedTomatoes from '../assets/bestsells/sell-3.jpg';
import pineapple from '../assets/bestsells/sell-4.jpg';
import './css/PopularProducts.css';
import BestSellHovered from './hovered/BestSellHovered';

const data = [
  {
    imgUrl: coffeeBeans,
    title: "100% Organic Coffee Beans.",
    subTitle: "Get the best deal before close.",
    button: " Shop Now",
  },
  {
    imgUrl: groundcoffee,
    title: "Roast Ground Coffee",
    text: "Tea, Coffee & Drinks",
    dallar: 13,
    dallarNumber: 18,
    star: 4.5,
    button: "Add to cart",
    days: "Days",
    daysNumber: 907,
    hours: "Hours",
    hoursNumber: 11,
    min: "Mins",
    minsNumber: 57,
    sec: "Sec",
    secNumber: 24,
  },
  {
    imgUrl: crushedTomatoes,
    title: "Crushed Tomatoes",
    text: "Fruits & Vegetables",
    dallar: 13,
    dallarNumber: 18,
    star: 4.5,
    button: "Add to cart",
    days: "Days",
    daysNumber: 967,
    hours: "Hours",
    hoursNumber: 11,
    min: "Mins",
    minsNumber: 52,
    sec: "Sec",
    secNumber: 24,

  },
  {
    imgUrl: pineapple,
    title: "Golden Pineapple",
    text: "Fruits & Vegetables",
    dallar: 13,
    dallarNumber: 18,
    star: 4.5,
    button: "Add to cart",
    days: "Days",
    daysNumber: 939,
    hours: "Hours",
    hoursNumber: 11,
    min: "Mins",
    minsNumber: 52,
    sec: "Sec",
    secNumber: 24,

  }

]
const BestSells = () => {
  const [isHovered, setisHovered] = useState(false);
  return (
    <>
      <div className='best-sell'>
        <h3 className='mt-5 '>Daily Best Sells</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
          {data.map((item, index) => (
            <div className="col" key={index}>
              {index === 0 ? (
                <div className="card custom-card h-100 w-100">
                  <img src={item.imgUrl} className="card-img-top" alt="coffeeBeans" />
                  <div className="card-img-overlay ms-4 text-white d-flex flex-column ">
                    <h6 className="card-title fs-4  fw-bolder">{item.title}</h6>
                    <p className="card-text ">{item.subTitle}</p>
                    <div className='w-100 d-block m-0'>
                      <button className=' rounded-2 p-2 px-3   border-0 fw-900 text-white bgclor'> {item.button}<i className="bi bi-arrow-right-short"></i></button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className=''
                  onMouseEnter={() => setisHovered(true)}
                  onMouseLeave={() => setisHovered(false)}>
                  {isHovered === true ? (
                  <div className='card h-100 rounded-3 border border-success card-index'>
                      <img src={item.imgUrl} className="card-img-top m-0 " alt="groundcoffee" />
                      <BestSellHovered/>
                      <div className="card-body  m-0">
                        <p className="card-text text-muted m-1 fontChange" >{item.text}</p>
                        <p className="card-title text-bold fw-bolder fontChange body m-1 ">{item.title}</p>
                        <div className='d-flex justify-content-between '>
                          <div>
                            <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>{item.dallar}</span>
                            <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>{item.dallarNumber}</span>
                          </div>
                          <div>
                            <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>{item.star}</span> </p>
                          </div>
                        </div>
                        <div>
                          <button className='addbtn p-2 rounded-3 w-100 text-white fw-bolder'> <i className="bi bi-plus"></i>{item.button}</button>
                        </div>
                        <div className="row mt-3  justify-content-center text-center ">
                          <div className="col-3   px-1">
                            <div className='card mx-0 p-2 d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.daysNumber}</span>
                              <span className='fntsze text-muted'>{item.days}</span>
                            </div>

                          </div>
                          <div className="col-3  px-1 ">
                            <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.hoursNumber}</span>
                              <span className='fntsze text-muted'>{item.hours}</span>
                            </div>
                          </div>
                          <div className="col-3 px-1">
                            <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.minsNumber}</span>
                              <span className='fntsze text-muted'>{item.min}</span>
                            </div>
                          </div>

                        </div>
                        <div className="row   justify-content-center text-center">
                          <div className="col-3 mt-2 px-1">
                            <div className='card p-2  text-center d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.secNumber}</span>
                              <span className='fntsze text-muted'>{item.sec}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className='card h-100 rounded-3'>
                      <img src={item.imgUrl} className="card-img-top m-0 " alt="groundcoffee" />
                      <div className="card-body  m-0">
                        <p className="card-text text-muted m-1 fontChange" >{item.text}</p>
                        <p className="card-title text-bold fw-bolder fontChange body m-1 ">{item.title}</p>
                        <div className='d-flex justify-content-between '>
                          <div>
                            <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>{item.dallar}</span>
                            <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>{item.dallarNumber}</span>
                          </div>
                          <div>
                            <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>{item.star}</span> </p>
                          </div>
                        </div>
                        <div>
                          <button className='addbtn p-2 rounded-3 w-100 text-white fw-bolder'> <i className="bi bi-plus"></i>{item.button}</button>
                        </div>
                        <div className="row mt-3  justify-content-center text-center ">
                          <div className="col-3   px-1">
                            <div className='card mx-0 p-2 d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.daysNumber}</span>
                              <span className='fntsze text-muted'>{item.days}</span>
                            </div>

                          </div>
                          <div className="col-3  px-1 ">
                            <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.hoursNumber}</span>
                              <span className='fntsze text-muted'>{item.hours}</span>
                            </div>
                          </div>
                          <div className="col-3 px-1">
                            <div className='card p-2 d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.minsNumber}</span>
                              <span className='fntsze text-muted'>{item.min}</span>
                            </div>
                          </div>

                        </div>
                        <div className="row   justify-content-center text-center">
                          <div className="col-3 mt-2 px-1">
                            <div className='card p-2  text-center d-flex flex-column align-item-center justify-content-center'>
                              <span className='fntsze fw-bolder'>{item.secNumber}</span>
                              <span className='fntsze text-muted'>{item.sec}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  )}
                </div>
              )}

            </div>
          ))}

        </div>

      </div >
    </>
  )
}

export default BestSells