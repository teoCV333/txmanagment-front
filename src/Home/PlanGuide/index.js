import './PlanGuide.css';
import plan from './plan.png';

function PlanGuide() {
    return (
        <div className="plan-guide">
            <div className='plan-img'>
                <img src={plan} />
            </div>
            <div className="plan-guide-content">
                <h1>Plan. Prepare. Enjoy home.</h1>
                <h3>Discover tools and tips to help make buying or refinancing a little easier</h3>  
            </div>
            <button>Get tips for homebuying</button>
        </div>
    );
}

export { PlanGuide };