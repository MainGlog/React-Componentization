import {Banner} from "./banner.jsx";
import {Students} from "./students.jsx";
import {Classes} from "./classes.jsx";
import {Dancing} from "./dancing.jsx";
import {Hours} from "./hours.jsx";
import {About} from "./about.jsx";
import {Testimonial} from "./testimonial.jsx";
import {Contact} from "./contact.jsx";

export function Home()
{
    return (
        <>
            <Banner/>
            <Students/>
            <Classes/>
            <Hours/>
            <About/>
            <Testimonial/>
            <Contact/>
        </>
    )
}