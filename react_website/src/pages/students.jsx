import {Link} from "react-router-dom";

export function Students()
{
    return (
    <div className="students-section layout_padding">
        <div className="container-fluid">
            <h1 className="text welcome_text">Welcome New Students!</h1>
            <p className="text sign-up-text">Sign up now to receive a 25-minute trial lesson - completely free!</p>
            <div className="click_bt"><Link to="/Contact">Click To Signup</Link></div>
        </div>
    </div>);
}