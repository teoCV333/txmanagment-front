import './GetCollege.css';
import college from './college.png';

function GetCollege() {
    return(
        <div className="get-college">
            <div className='college-logo'>
                <img src={college} />
            </div>
            <h1>Get college ready</h1>
            <h3>Resources to help you plan and pay for college.</h3>
            <h2>Learn more</h2>
        </div>
    );
}

export { GetCollege };