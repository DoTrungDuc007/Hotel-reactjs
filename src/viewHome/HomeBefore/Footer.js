import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/responsive.css"
import "./css/style.css"
import face from "./icon/facebook.png";
import twitter from "./icon/Twitter.png";
import link from "./icon/linkedin.png";
import insta from "./icon/instagram.png";

export  default function Footer(){


    return(
      <>
          <footer>
              <div id="contact" className="footer">
                  <div className="container">
                      <div className="row pdn-top-30">

                          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                              <div className="Follow">
                                  <ul className="location_icon">
                                      <li> <img src={face} /></li>
                                      <li> <img src={twitter}/></li>
                                      <li> <img src={link} /></li>
                                      <li> <img src={insta} /></li>

                                  </ul>
                                    <h4 style={{ color: "white" }}>Address</h4>
                                  <span>217 Yen Hoa,<br />Cau Giay,<br/>Ha Noi<br/><br/><br/>Sdt: 0356983371</span>
                              </div>
                          </div>
                          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                              <div className="Follow">
                                  <h3>ADDITIONAL LINKS</h3>
                                  <ul className="link">
                                      <li> <a href="#">About us</a></li>
                                      <li> <a href="#">Terms and conditions</a></li>
                                      <li> <a href="#"> Privacy policy</a></li>

                                      <li> <a href="#"> Contact us</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                              <div className="Follow">
                                  <h3> Contact</h3>
                                  <div className="row">
                                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                          <input className="Newsletter" placeholder="Name" type="text" />
                                      </div>
                                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                          <input className="Newsletter" placeholder="Email" type="text" />
                                      </div>
                                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                          <textarea className="textarea" placeholder="comment" type="text" defaultValue={"Comment"} />
                                      </div>
                                  </div>
                                  <button className="Subscribe">Submit</button>
                              </div>
                          </div>
                      </div>
                      <div className="copyright">
                          <div className="container">
                              <p>Do Trung Duc - dotrungduc0342000@gmail.com - HaNoi national university</p>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
      </>
    );
 }