import './BonusOnUs.css';
import dollar from './dollar.png';

function BonusOnUs() {
    return (
        <div className="bonus-on-us">
            <div className='dollar-logo'>
                <img src={dollar} alt=""/>
            </div>
            <div className="bonus-content">
                <h1>$525 Bonus on us</h1>
                <h3>Open a new consumer savings account with qualifying balances.</h3>
                <h2>Get Started </h2>
            </div>
        </div>
    );
}

export { BonusOnUs };