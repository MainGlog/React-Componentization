import {Link} from "react-router-dom";

export function Footer()
{
    return (
        <>
            <div className="footer_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <h1 className="address_text">Address</h1>
                            <div className="icon">
                                <img src="../../public/images/map-icon.png"/>
                                <span className="paddlin_left_0">
                                    480 Waupelani Dr, State College, PA 16801
                                </span>
                            </div>
                            <div className="icon">
                                <img src="../../public/images/call-icon.png"/>
                                <span className="paddlin_left_0">
                                    (888) 282-7427<br/>(814) 234-7755
                                </span>
                            </div>
                            <div className="icon"><img src="../../public/images/mail-icon.png"/>
                                <span
                                    className="paddlin_left_0">email@gmail.com
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <h1 className="address_text">Opening times</h1>
                            <div className="hiphop_text_1">Hip Hop Dance:
                                <span className="footer-span">
                                    7:00am - 5:00pm
                                </span>
                            </div>
                            <div className="hiphop_text_1">Ballet:
                                <span className="footer-span">
                                    9:00am - 12:00pm
                                </span>
                            </div>
                            <div className="hiphop_text_1">Break Dance:
                                <span className="footer-span">
                                7:00pm - 12:00am
                                </span>
                            </div>
                            <div className="hiphop_text_1">Salsa:
                                <span className="footer-span">
                                    6:00pm - 11:00pm
                                </span>
                            </div>
                            <div className="hiphop_text_1">Tap Dancing:
                                <span className="footer-span">
                                    7:00pm - 8:00pm
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <h1 className="address_text">Newsletter</h1>
                            <input type="text" className="Enter_text" placeholder="Enter your Emil"
                                   name="Enter your Emil"/>
                            <div className="subscribe_bt"><a href="#">Subscribe</a></div>
                            <div className="social_icon">
                                <ul>
                                    <li><a href="#"><img src="../../public/images/fb-icon.png"/></a></li>
                                    <li><a href="#"><img src="../../public/images/twitter-icon.png"/></a></li>
                                    <li><a href="#"><img src="../../public/images/linkedin-icon.png"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright_section">
                <div className="container">
                    <p className="copyright_text">2024 All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}