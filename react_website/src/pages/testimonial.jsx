export function Testimonial()
{
    return (
    <div className="testimonial_section layout_padding">
        <div className="container">
            <h1 className="ballet_text">Testimonial</h1>
            <p className="amet_text">amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </p>
            <div id="main_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="testimonial_section layout_padding">
                            <h1 className="emrold_text">Jill B.</h1>
                            <p className="dummy_text">My daughter has been taking classes at this dance studio for
                                several years
                                now, and
                                I can honestly say that she has grown immensely in her dancing ability. The instructors
                                are
                                incredibly
                                knowledgeable and patient with the students, which has made my daughter's experience
                                much
                                more
                                enjoyable. She loves going to class each week and looks forward to learning something
                                new! </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial_section layout_padding">
                            <h1 className="emrold_text">Karen H.</h1>
                            <p className="dummy_text">I've been taking classes at this dance studio for almost a year
                                now, and
                                I'm so glad
                                I found it! The studio has a great atmosphere and the instructors are so encouraging and
                                supportive. I'm
                                learning so much and having a lot of fun!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="testimonial_section_2 layout_padding">
                            <h1 className="emrold_text">Daphne W.</h1>
                            <p className="dummy_text">I had the pleasure of attending classes at the dance studio and it
                                was
                                such a
                                fantastic experience. I was able to learn a variety of dance styles and I felt like I
                                was
                                part of a
                                family. The instructors were so knowledgeable and encouraging, and the other students
                                were
                                super
                                friendly. I'm so glad I decided to give it a try - I've never felt more confident in my
                                dancing! Thanks
                                to the dance studio, I've been able to take on a whole new passion! </p>
                        </div>
                    </div>
                </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#main_slider"
                        data-bs-slide="prev">
                    <i className="fa fa-left"><img src="../../public/images/left-icon.png"/></i>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#main_slider"
                        data-bs-slide="next">
                    <i className="fa fa-right"><img src="../../public/images/right-icon.png"/></i>
                </button>
            </div>
        </div>
    </div>
    );
}