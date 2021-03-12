import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/responsive.css"
import "./css/style.css"
import logo1 from "./image/1.png"
import logo2 from "./image/2.png"
import logo3 from "./image/3.png"
import banner from "./image/banner.jpg"
import blog_image from "./image/blog-image.jpg"
import blog_image0 from "./image/blog-image0.jpg"
import boat from "./image/boat.jpg"
import shop from "./image/shop.jpg"
import checkin from "./image/checkin.jpg"
import logo from "./image/logo.png"
import plane from "./image/plane-img.png"



import {Link, useHistory} from "react-router-dom";
import Footer from "./Footer";


export default function HomeBefore(){
    const history = useHistory("/loginHome"
    );
    const signIn = () => {
            history.replace("/loginHome");
    }

    return (

            <>
                <div>
                    <header>
                        <div className="header">
                            <div className="header_white_section">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="header_information">
                                                <ul>
                                                    <li><img src={logo1} />217 Yen Hoa Cau Giay Ha Noi</li>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                                    <li><img src={logo2} />0356983371</li>&emsp;&emsp;&emsp;&emsp;
                                                    <li><img src={logo3} /> dotrungduc0342000@gmail.com</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                        <div className="full">
                                            <div className="center-desk">
                                                <div className="logo"> <a href="#"><img src={logo} alt="#" /></a> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                        <div className="menu-area">
                                            <div className="limit-box">
                                                <nav className="main-menu">
                                                    <ul className="menu-area-main">

                                                        <li class="active"><Link href="#">Home</Link></li>
                                                        <li><Link onClick={signIn} href="">Sign In</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <section>
                        <div className="banner-main">
                            <img src={banner} alt="#" />
                            <div className="container">
                                <div className="text-bg">
                                    <h1>VIETNAM<br /><strong className="white">HaLong Bay</strong></h1>
                                    <div className="button_section"> <a className="main_bt" href="#">Welcome to us!</a></div>
                                    <div className="container">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br /><br />
                    <div id="about" className="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="titlepage">
                                        <h2>Everything you need HaLong Bay</h2>
                                        <span>
                        Halong Bay is a beautiful natural wonder in northern Vietnam near
                        the Chinese border. The Bay is dotted with 1,600 limestone islands
                        and islets and covers an area of over 1,500 sqkm. This extraordinary
                        area was declared a UNESCO World Heritage Site in 1994. For many tourists,
                        this place is like something right out of a movie. The fact is that Halong Bay
                        features a wide range of biodiversity, while the surrealistic scenery has indeed
                        featured in endless movies. <br/>


                      </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="blog-box">
                                        <figure>
                                            <img src={boat} style={{
                                                width: 400,
                                                height: 250
                                            }} />

                                        </figure>
                                        <div className="travel">
                                            <span>Yacht experience in halong</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="blog-box">
                                        <figure>
                                            <img src={checkin} style={{
                                                width: 400,
                                                height: 250
                                            }} />
                                        </figure>
                                        <div className="travel">
                                            <span>Great check-in location</span>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="blog-box">
                                        <figure>
                                            <img src={shop} style={{
                                                width: 400,
                                                height: 250
                                            }} />
                                        </figure>
                                        <div className="travel">
                                            <span>Buy souvenirs</span>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div><br/><br/><br/><br/><br/>

                        <div className="bg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <div className="titlepage">
                                            <h2>Optional Tour & Activites</h2>

                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                        <div className="about-box">
                                            <p> <span>
                            Ha Long is surrounded by Ha Long City, Cam Pha City and Van Don District
                            in Quang Ninh Province. Ha Long has been recognized by UNESCO as a World
                            Natural Heritage. Coming to Ha Long, visitors can walk on the bay to see
                            a series of islands and rocks with majestic structures and designs. Some
                            prominent and interesting sights when traveling to Ha Long are Hon Con Coc,
                            Hon Ga Choi, Ti Top Island, Ngoc Vung Island, Sung Sot Cave, Thien Cung Cave,
                            Dau Go Cave and Bai Tu Long Bay. Ha Long was also voted as one of the new 7
                            natural wonders of the world.
                          </span></p>
                                            <div className="palne-img-area">
                                                <img src={plane} alt="images" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                    <div id="blog" className="blog">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="titlepage">
                                        <h2>Luxury Hotel, Resort </h2>
                                        <span>You will have unforgettable memories in Halong Bay</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="blog-box">
                                        <figure><img src={blog_image0} style={{
                                            width: 400,
                                            height: 250
                                        }} />
                                            <span>4 Feb 2019</span>
                                        </figure>
                                        <div className="travel">
                                            <span>Post  By :  Travel  Agency</span>
                                        </div>
                                        <h3>HaLong Amazing Tour</h3>
                                        <p>It is a long established fact that
                                            a reader will be distracted by the
                                            readable content of a page when looking
                                            at its layout. The point of using Lorem
                                            Ipsum is that it has a more-or-less normal
                                            distribution of letters, as opposed to using
                                            'Content here, content here', making it look like
                                            readable English. Many desktop publishing packages and web</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="blog-box">
                                        <figure><img src={blog_image} style={{
                                            width: 400,
                                            height: 250
                                        }} />
                                            <span>10 Feb 2019</span>
                                        </figure>
                                        <div className="travel">
                                            <span>Post  By :  Travel  Agency</span>
                                        </div>
                                        <h3>HaLong Amazing Tour</h3>
                                        <p>It is a long established fact that a reader will
                                            be distracted by the readable content of a page
                                            when looking at its layout. The point of using
                                            Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, as opposed to using 'Content
                                            here, content here', making it look like readable English.
                                            Many desktop publishing packages and web</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                    <div className="blog-box">
                                        <figure><img src={blog_image0} style={{
                                            width: 400,
                                            height: 250
                                        }} />
                                            <span>4 Feb 2019</span>
                                        </figure>
                                        <div className="travel">
                                            <span>Post  By :  Travel  Agency</span>
                                        </div>
                                        <h3>HaLong Amazing Tour</h3>
                                        <p>It is a long established fact that a reader will be
                                            distracted by the readable content of a page when
                                            looking at its layout. The point of using Lorem Ipsum
                                            is that it has a more-or-less normal distribution of
                                            letters, as opposed to using 'Content here, content here',
                                            making it look like readable English. Many desktop publishing packages and web</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>

            </>


    );
}