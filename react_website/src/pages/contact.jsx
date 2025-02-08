import {Link} from "react-router-dom";

export function Contact()
{
    return (<div className="contact_section layout_padding">
        <div className="container-fluid">
            <h1 className="ballet_text">Contact</h1>
            <p className="amet_text">Get in contact with us!</p>
            <div className="contact_section2">
                <div className="row">
                    <div className="col-md-6 padding_left_0">
                        <div className="mail_section">
                            <input type="text" className="mail_text" placeholder="Name" name="Name"/>
                            <input type="text" className="mail_text" placeholder="Phone Number" name="Phone Number"/>
                            <input type="email" className="mail_text" placeholder="Email" name="Email"/>
                            <textarea className="massage_text" placeholder="Message" rows="5" id="comment"
                                      name="Message"></textarea>
                            <div className="send_bt"><a href="#">send</a></div>
                        </div>
                    </div>
                    <div className="col-md-6 padding_0">
                        <div className="map-responsive">
                            <iframe
                                className="map-style"
                                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France"
                                width="600" height="400" frameBorder="0"
                                allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}