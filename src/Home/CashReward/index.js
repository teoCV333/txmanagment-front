import './CashReward.css';
import logo from './cards-logo.png';

function CashReward() {
    return (
        <div className="cash-reward">
            <div className='cards-logo'>
                <img src={logo} />
            </div>
            <h1>$300 Cash rewards Bonus</h1>
            <h2>Annual fee: $0. Terms apply.</h2>
        </div>
    );
}

export { CashReward };