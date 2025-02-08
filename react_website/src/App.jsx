import {Header} from "./pages/header.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home.jsx";
import {Dancing} from "./pages/dancing.jsx";
import {Classes} from "./pages/classes.jsx";
import {Hours} from "./pages/hours.jsx";
import {About} from "./pages/about.jsx";
import {Contact} from "./pages/contact.jsx";
import {Footer} from "./pages/footer.jsx";

export function App()
{
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/header" element={<Header/>}/>
                <Route path="/dancing" element={<Dancing/>}/>
                <Route path="/classes" element={<Classes/>}/>
                <Route path="/hours" element={<Hours/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    )
}