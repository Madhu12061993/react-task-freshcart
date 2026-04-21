import sev from '../assets/products/product-img-7.jpg'
import './css/PopularProducts.css';
import nutrichoice from '../assets/products/product-img-2.jpg';
import Act2 from '../assets/products/product-img-5.jpg';
import amul from '../assets/products/product-img-13.jpg';
import millate from '../assets/products/product-img-12.jpg';
import corn from '../assets/products/product-img-10.jpg';
import cheese from '../assets/products/product-img-9.jpg';
import epigamia from '../assets/products/product-img-8.jpg';
import lays from '../assets/products/product-img-4.jpg';
import fivestar from '../assets/products/product-img-3.jpg';
import { useState } from 'react';
import PopularProductsHovered from './hovered/PopularProductsHovered';

const data = [
    {
        text: "sale",
        imgUrl: sev,
        title: "Haldiram's Sev Bhujia",
        subTitle: "Snack & Munchies.",
        starValue: "4.5(149)",
        button: "Add",
        dallarValue: 18,
        dallarNumber: 25,
    },
    {
        text: "14%",
        imgUrl: nutrichoice,
        title: "NutriChoice Digestive",
        subTitle: "Bakery & Biscuits",
        starValue: "4.5(25)",
        button: "Add",
        dallarValue: 24,

    },
    {
        imgUrl: fivestar,
        title: "Cadbury 5 Star Chocolate",
        subTitle: "Bakery & Biscuits",
        starValue: "5(469)",
        button: "Add",
        dallarValue: 32,
        dallarNumber: 35,
    },
    {
        text: "Hot",
        imgUrl: lays,
        title: "Onion Flavour Potato",
        subTitle: "Snack & Munchies",
        starValue: "3.5 (456)",
        button: "Add",
        dallarValue: 3,
        dallarNumber: 5,
    },
    {
        imgUrl: Act2,
        title: "Salted Instant Popcorn",
        subTitle: "Instant Food",
        starValue: "4.5 (39)",
        button: "Add",
        dallarValue: 13,
        dallarNumber: 18,
    },
    {
        text: "sale",
        imgUrl: epigamia,
        title: "Blueberry Greek Yogurt",
        subTitle: "Dairy, Bread & Eggs",
        starValue: "4.5 (189)",
        button: "Add",
        dallarValue: 18,
        dallarNumber: 24,
    },
    {
        imgUrl: cheese,
        title: "Britannia Cheese Slices",
        subTitle: "Dairy, Bread & Eggs",
        starValue: "5 (345)",
        button: "Add",
        dallarValue: 24,
    },
    {
        imgUrl: corn,
        title: "Kellogg's Original Cereals",
        subTitle: "Instant Food",
        starValue: " 4 (90)",
        button: "Add",
        dallarValue: 32,
        dallarNumber: 35,
    },
    {
        imgUrl: millate,
        title: "Slurrp Millet Chocolate",
        subTitle: "Snack & Munchies",
        starValue: "4.5 (67)",
        button: "Add",
        dallarValue: 3,
        dallarNumber: 5,
    },
    {
        imgUrl: amul,
        title: "Amul Butter - 500 g",
        subTitle: "Dairy, Bread & Eggs",
        starValue: "3.5 (89)",
        button: "Add",
        dallarValue: 13,
        dallarNumber: 18,
    },
]
const PopularProducts = () => {
    const [isHovered, setisHovered] = useState<number |null>(null);
    return (
        <>
            <div className='my-5 pt-5'>
                <h4>Popular Products</h4>
                <div className="row row-cols-1 row-cols-md-5 g-4 mt-1">
                    {/* col-1-sev */}
                    {data.map((item, index) => (
                        <div key={index} className="col "
                            onMouseEnter={() => setisHovered(index)}
                            onMouseLeave={() => setisHovered(null)}>
                            {isHovered === index ? (
                                <div className="card  rounded-3 border border-success hover-shadow">
                                    <div className='w-100 d-block ' >
                                        <span className=' badge bg-danger stale '>{item.text}</span>
                                        <PopularProductsHovered />
                                    </div>
                                    <img src={item.imgUrl} className="card-img-top m-0 imgSize " alt="sev" />
                                    <div className="card-body  m-0">
                                        <p className="card-text text-muted m-0 fontChange" >{item.subTitle}</p>
                                        <p className="card-title text-bold fw-bolder fontChange body m-0 ">{item.title}</p>
                                        <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>{item.starValue}</span> </p>
                                        <div className='d-flex justify-content-between '>
                                            <div>
                                                <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>{item.dallarValue}</span>
                                                {item.dallarNumber ? <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>{item.dallarNumber}</span> : ""}
                                            </div>
                                            <div>
                                                <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> {item.button}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="card  rounded-3">
                                    <div className='w-100 d-block ' >
                                        <span className=' badge bg-danger stale '>{item.text}</span>
                                    </div>
                                    <img src={item.imgUrl} className="card-img-top m-0 imgSize " alt="sev" />
                                    <div className="card-body  m-0">
                                        <p className="card-text text-muted m-0 fontChange" >{item.subTitle}</p>
                                        <p className="card-title text-bold fw-bolder fontChange body m-0 ">{item.title}</p>
                                        <p className='mt-2 fontChange'><i className="bi bi-star-fill text-warning "></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <i className="bi bi-star-fill text-warning"></i> <span className='text-muted'>{item.starValue}</span> </p>
                                        <div className='d-flex justify-content-between '>
                                            <div>
                                                <span className='fw-bolder fontChange'><i className="bi bi-currency-dollar"></i>{item.dallarValue}</span>
                                                {item.dallarNumber ? <span className='text-muted m-0 fontChange'><i className="bi bi-currency-dollar "></i>{item.dallarNumber}</span> : ""}
                                            </div>
                                            <div>
                                                <button className='addbtn m-0 text-white fw-800'> <i className="bi bi-plus"></i> {item.button}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}

                </div>
            </div>
        </>

    )
}

export default PopularProducts;




