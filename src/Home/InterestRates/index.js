import './InterestRates.css';
import taxes from './taxes.png';

function InterestRates() {
    return (
        <div className="interest-rates">
            <div className="rates-logo">
                <img src={taxes} alt=""/>
            </div>
            <h1>Interest rates today</h1>
            <h2>Check rates</h2>
        </div>
    );
}

export { InterestRates };