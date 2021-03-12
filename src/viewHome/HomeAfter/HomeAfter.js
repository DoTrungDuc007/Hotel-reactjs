import React from "react";
import "./HomeAfter.css.css"
import 'bootstrap/dist/css/bootstrap.css';
import Header from "../HomeBefore/Header";
import Footer from "../HomeBefore/Footer";

import cg1 from "./img/category-1.jpg"
import cg2 from "./img/category-2.jpg"
import cg3 from "./img/category-3.jpg"
import cg4 from "./img/category-4.jpg"
import cg5 from "./img/category-5.jpg"
import cg6 from "./img/category-6.jpg"
import cg7 from "./img/category-7.jpg"
import cg8 from "./img/category-8.jpg"
import sl from "./img/slider-1.jpg"


import HomeIcon from '@material-ui/icons/Home';

export default function HomeAfter(){

    return (
      <>
          <Header></Header>

          <div>

              <div className="header" style={{
                  backgroundColor: 'white',
                }}>
                  <div className="container-fluid" >
                      <div className="row">
                          <div className="col-md-3">
                              <nav className="navbar bg-light" >
                                  <ul className="navbar-nav">

                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-home" />Home</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-home" />Hotels</a>
                                      </li>
                                      <li className="nav-item">
                                          <a className="nav-link" href="#"><i className="fa fa-child" />Tours</a>
                                      </li>
                                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                                  </ul>
                              </nav>
                          </div>
                          <div className="col-md-6">
                              <div className="header-slider normal-slider">
                                  <div className="header-slider-item">
                                      <img src={sl} style={{ height: 400 }} />
                                      <div className="header-slider-caption">


                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="header-img">
                                  <div className="img-item">
                                      <img src={cg1} />
                                      <a className="img-text" href>
                                          <p>Some text goes here that describes the image</p>
                                      </a>
                                  </div>
                                  <div className="img-item">
                                      <img src={cg2} />
                                      <a className="img-text" href>
                                          <p>Some text goes here that describes the image</p>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <br/>
              </div><br/>

              <div className="brand">
                  <div className="container-fluid">
                  </div>
              </div>
              <div className="feature">
                  <div className="container-fluid">
                      <div className="row align-items-center">
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fab fa-cc-mastercard" />
                                  <h2>Secure Payment</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fa fa-truck" />
                                  <h2>Worldwide Delivery</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fa fa-sync-alt" />
                                  <h2>90 Days Return</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
                          <div className="col-lg-3 col-md-6 feature-col">
                              <div className="feature-content">
                                  <i className="fa fa-comments" />
                                  <h2>24/7 Support</h2>
                                  <p>
                                      Lorem ipsum dolor sit amet consectetur elit
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="category">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-md-3">
                              <div className="category-item ch-400">
                                  <img src={cg3} />
                                  <a className="category-name" href>
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-250">
                                  <img src={cg4} />
                                  <a className="category-name" href>
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                              <div className="category-item ch-150">
                                  <img src={cg5} />
                                  <a className="category-name" href>
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-150">
                                  <img src={cg6} />
                                  <a className="category-name" href>
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                              <div className="category-item ch-250">
                                  <img src={cg7} />
                                  <a className="category-name" href>
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                          </div>
                          <div className="col-md-3">
                              <div className="category-item ch-400">
                                  <img src={cg8}/>
                                  <a className="category-name" href>
                                      <p>Some text goes here that describes the image</p>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="featured-product product">
                  <div className="container-fluid">
                      <div className="section-header">
                          <h1>Featured Product</h1>
                      </div>
                      <div className="row align-items-center product-slider product-slider-4">
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-1.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-2.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-3.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-4.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="recent-product product">
                  <div className="container-fluid">
                      <div className="section-header">
                          <h1>Recent Product</h1>
                      </div>
                      <div className="row align-items-center product-slider product-slider-4">
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-6.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-7.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-8.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="product-item">
                                  <div className="product-title">
                                      <a href="#">Product Name</a>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                  </div>
                                  <div className="product-image">
                                      <a href="product-detail.html">
                                          <img src="img/product-9.jpg" alt="Product Image" />
                                      </a>
                                      <div className="product-action">
                                          <a href="#"><i className="fa fa-cart-plus" /></a>
                                          <a href="#"><i className="fa fa-heart" /></a>
                                          <a href="#"><i className="fa fa-search" /></a>
                                      </div>
                                  </div>
                                  <div className="product-price">
                                      <h3><span>$</span>99</h3>
                                      <a className="btn" href><i className="fa fa-shopping-cart" />Buy Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="review">
                  <div className="container-fluid">
                      <div className="row align-items-center review-slider normal-slider">
                          <div className="col-md-6">
                              <div className="review-slider-item">
                                  <div className="review-img">
                                      <img src="img/review-1.jpg" alt="Image" />
                                  </div>
                                  <div className="review-text">
                                      <h2>Customer Name</h2>
                                      <h3>Profession</h3>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="review-slider-item">
                                  <div className="review-img">
                                      <img src="img/review-2.jpg" alt="Image" />
                                  </div>
                                  <div className="review-text">
                                      <h2>Customer Name</h2>
                                      <h3>Profession</h3>
                                      <div className="ratting">
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                          <i className="fa fa-star" />
                                      </div>
                                      <p>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae nunc eget leo finibus luctus et vitae lorem
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer></Footer>
      </>
    );

}