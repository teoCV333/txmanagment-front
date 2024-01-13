import './FindCC.css';
import cc from './cc.png';

function FindCC() {
    return (
        <div className="find-cc">
            <div className="cc-logo">
                <img src={cc} alt=""/>
            </div>
            <h1>Find a credit card</h1>
            <h2>More information</h2>
        </div>
    );
}

export { FindCC };