import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'fontawesome';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
    </StrictMode>
)

/*
document.addEventListener('DOMContentLoaded', () =>
{
    /!* Tooltip
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- *!/

    document.querySelectorAll('[data-toggle="tooltip"]').forEach((tooltip) =>
    {
        new bootstrap.Tooltip(tooltip);
    });

    /!* Scroll to Top
    -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- *!/

    window.addEventListener('scroll', function ()
    {
        const scroll = window.scrollY;
        if (scroll >= 100)
        {
            document.getElementById("btn-back-to-top").style.display = "block";
        }
        else
        {
            document.getElementById("btn-back-to-top").style.display = "none";
        }
    });

    document.getElementById("btn-back-to-top").addEventListener("click",  () =>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
*/


