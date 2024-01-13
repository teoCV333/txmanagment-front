import './AppAd.css';
import phone from './app-phone.png';

function AppAd() {
    return (
        <div className="ad-content">
            <h1>Banking in the palm of your hand</h1>
            <p>
                Our Wells Fargo Mobile<sup>®</sup>
                app gives you fast and secure access to your finances
            </p>
            <div className="phone-section">
                <img src={phone} alt=""/>
            </div>
            <div className="phone-section-options" >
                <ul>
                    <li>Check your account balance</li>
                    <li>View your latest FICO<sup>®</sup>  Score<sup>1</sup> </li>
                    <li>Send and receive money with Zelle<sup>2</sup></li>
                </ul>
            </div>
        </div>
    );
}

export { AppAd };