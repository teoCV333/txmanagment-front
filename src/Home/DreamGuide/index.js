import './DreamGuide.css';
import dream from './dream.png';

function DreamGuide() {
    return (
        <div className="dream-guide">
            <div className='dream-img'>
                <img src={dream} />
            </div>
            <div className="dream-guide-content">
                <h1>Dream big. Make it happen. Live it up.</h1>
                <h3>Discover how smart saving habits could help make your dream purchases a reality</h3>  
            </div>
            <button>Get tips for big purchases</button>
        </div>
    );
}

export { DreamGuide };