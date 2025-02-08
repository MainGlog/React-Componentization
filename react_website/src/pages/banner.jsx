import {Link} from "react-router-dom";

export function Banner()
{
    return (
    <>
        <div className="banner_section layout_padding">
            <div className="container-fluid">
                <div id="my_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner_title">
                                        <h1 className="dance_text">Dance beat</h1>
                                        <p>Move with us - your ultimate dance journey starts here!</p>
                                        <div className="banner-btn about-btn">
                                            <Link to="/About">About Us</Link>
                                        </div>
                                        <div className="banner-btn contact-btn">
                                            <Link to="/Contact">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-1"><img src="../../public/images/img-1.png"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner_title">
                                        <h1 className="dance_text">Dance beat</h1>
                                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magn</p>
                                        <div className="banner-btn about-btn">
                                            <Link to="/About">About Us</Link>
                                        </div>
                                        <div className="banner-btn contact-btn">
f                                            <Link to="Contact">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-1"><img src="../../public/images/img-1.png"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="banner_title">
                                        <h1 className="dance_text">Dance beat</h1>
                                        <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                            dolore magn</p>
                                        <div className="banner-btn about-btn">
                                            <Link to="about.html">About Us</Link>
                                        </div>
                                        <div className="banner-btn contact-btn">
                                            <Link to="contact.html">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-1"><img src="../../public/images/img-1.png"/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                            data-bs-target="#my_slider" data-bs-slide="prev">
                        <i className="fa fa-left"><img src="../../public/images/left-icon.png"/></i>
                    </button>
                    {/*ref="l-btn" was located before className in the first button*/}
                    <button className="carousel-control-next" type="button" data-bs-target="#my_slider"
                            data-bs-slide="next">
                        <i className="fa fa-right"><img src="../../public/images/right-icon.png"/></i>
                    </button>
                </div>
            </div>
        </div>
        <div className="ram">
            <div className="border_bg"></div>
        </div>
    </>
)
}