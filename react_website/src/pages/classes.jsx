import {Link} from "react-router-dom";
import {Dancing} from "./dancing.jsx";

export function Classes()
{
    return (<>
        <div className="classes_section">
        <h1 className="classes_text">Classes</h1>
        <div className="dance_main">
            <div className="row">
                <div className="col-sm-3">
                    <div className="box active">Ballet Dancing</div>
                    <div className="box">Hip Hop Dance</div>
                </div>
                <div className="col-sm-3">
                    <div className="box">Break Dance</div>
                    <div className="box">Women-only</div>
                </div>
                <div className="col-sm-3">
                    <div className="box">Salsa</div>
                    <div className="box">Tap Dancing</div>
                </div>
                <div className="col-sm-3 padding_0">
                    <div className="image_2"></div>
                </div>
            </div>
        </div>
        <div className="readmore_bt">
            <a href="#slides">Read More</a>
        </div>
    </div>
    <Dancing/>
    </>
    )
}