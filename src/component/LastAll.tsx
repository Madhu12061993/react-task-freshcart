import googlepay from '../assets/last/google pay.png';
import appstore from '../assets/last/appstore.jpg';
import amazonpay from '../assets/last/amazonpay.webp';
import paypal from '../assets/last/PayPal.jpg';
import america from '../assets/last/images1.png';
import './css/PopularProducts.css';
import { useState } from 'react';



// const Catagories1 = [
//     "Vegetables & Fruits",
//     "Breakfast & instant food",
//     "Bakery & Biscuits",
//     "Atta, rice & dal",
//     "Sauces & spreads",
//     "Organic & gourmet",
//     "Baby care",
//     "Cleaning essentials",
//     "Personal care",
// ]
// const Catagories2 = [
//     "Dairy, bread & eggs",
//     "Cold drinks & juices",
//     "Tea, coffee & drinks",
//     "Masala, oil & more",
//     "Chicken, meat & fish",
//     "Paan corner",
//     "Pharma & wellness",
//     "Home & office",
//     "Pet care"
// ]
// const Catagories = [Catagories1, Catagories2]
// const Company = [
//     "Company",
//     "About",
//     "Blog",
//     "Help Center",
//     "Our Value"
// ]
// const Consumer = [
//     "Payments",
//     "Shipping",
//     "Product Returns",
//     "FAQ",
//     "Shop Checkout",
// ]
// const Shopper = [
//     "Shopper Opportunities",
// "Become a Shopper",
// "Earnings",
// "Ideas & Guides",
// "New Retailers",
// ]
// const FreshCart = [
//     "Freshcart programs",
// "Gift Cards",
// "Promos & Coupons",
// "Freshcart Ads",
// "Careers",
// ]
// const footerSection = [
//     {title:"Get to know us" , items:Company},
//     {title:"For Consumers" ,items:Consumer},
//     {title:"Become a Shopper" , items:Shopper},
//     {title:"Freshcart programs" , items:FreshCart},
// ];
const LastAll = () => {
    const [isHovered, setisHovered] = useState(false);


    return (
        <>
            <div className="container-fluid container-color">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="para-txt  fw-bolder">Categories</p>
                            <div className="row">
                                <div className="col para-txt " onMouseEnter={() => setisHovered(true)} onMouseLeave={() => setisHovered(false)}>
                                    <p >Vegetables & Fruits</p>
                                    <p>Breakfast & instant food</p>
                                    <p>Bakery & Biscuits</p>
                                    <p>Atta, rice & dal</p>
                                    <p>Sauces & spreads</p>
                                    <p>Organic & gourmet</p>
                                    <p>Baby care</p>
                                    <p>Cleaning essentials</p>
                                    <p>Personal care</p>
                                </div>
                                <div className="col para-txt ">
                                    <p>Dairy, bread & eggs</p>
                                    <p>Cold drinks & juices</p>
                                    <p>Tea, coffee & drinks</p>
                                    <p>Masala, oil & more</p>
                                    <p>Chicken, meat & fish</p>
                                    <p>Paan corner</p>
                                    <p>Pharma & wellness</p>
                                    <p>Home & office</p>
                                    <p>Pet care</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 para-txt ">
                            <p className=" fw-bolder">Get to know us</p>
                            <p>Company</p>
                            <p>About</p>
                            <p>Blog</p>
                            <p>Help Center</p>
                            <p>Our Value</p>
                        </div>
                        <div className="col-2 para-txt ">
                            <p className=" fw-bolder">For Consumers</p>
                            <p>Payments</p>
                            <p>Shipping</p>
                            <p>Product Returns</p>
                            <p>FAQ</p>
                            <p>Shop Checkout</p>
                        </div>
                        <div className="col-2 para-txt ">
                            <p className=" fw-bolder">Become a Shopper</p>
                            <p>Shopper Opportunities</p>
                            <p>Become a Shopper</p>
                            <p>Earnings</p>
                            <p>Ideas & Guides</p>
                            <p>New Retailers</p>
                        </div>
                        <div className="col-2 para-txt ">
                            <p className=" fw-bolder">Freshcart programs</p>
                            <p>Freshcart programs</p>
                            <p>Gift Cards</p>
                            <p>Promos & Coupons</p>
                            <p>Freshcart Ads</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col payment d-flex gap-2 text-center align-items-center">
                            <p className='mt-3 font-para'>Payment Partners</p>
                            <img src={amazonpay} alt="amazonpay" />
                            <img src={america} alt="america" />
                            <img src={america} alt="america" />
                            <img src={paypal} alt="paypal" />
                            <img src={paypal} alt="paypal" />
                        </div>
                        <div className="col paments d-flex gap-2 justify-content-end">
                            <p className='mt-3 font-para'>Get deliveries with FreshCart</p>
                            <img src={appstore} alt="appstore" />
                            <img src={googlepay} alt="googlepay" />
                        </div>
                    </div>
                    <hr />
                    <div className="row mt-2">
                        <div className="col d-flex gap-2">
                            <i className="bi bi-c-circle"></i>
                            <p className='circle-para text-muted' > 2022 - 2026 FreshCart eCommerce HTML Template. All rights reserved. Powered by
                                 <span className={`policy ${isHovered?"text-success":""}`}
                                 onMouseEnter={() => setisHovered(true)}
                                 onMouseLeave={() => setisHovered(false)}> Codescandy.</span></p>
                        </div>
                        <div className="col social d-flex gap-2 justify-content-end">
                            <p className='circle-para mt-3 text-muted'>Follow us on</p>
                            <div className="card  rounded-2 align-self-center"><i className =" px-2 py-1 text-muted bi bi-facebook"></i></div>
                            <div className="card rounded-2 align-self-center"><i className ="px-2 py-1 text-muted  bi bi-twitter"></i></div>
                            <div className="card rounded-2 align-self-center"><i className ="px-2 py-1 text-muted bi bi-instagram"></i></div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )

}

export default LastAll;
