import './ReimagineGuide.css';
import reimagine from './reimagine.png';

function ReimagineGuide() {
    return (
        <div className="reimagine-guide">
            <div className='reimagine-img'>
                <img src={reimagine} alt=""/>
            </div>
            <div className="reimagine-guide-content">
                <h1>Reimagine. Navigate. Move forward.</h1>
                <h3>Discover steps that may help you manage life-changing events</h3>  
            </div>
            <button>Manage life events</button>
        </div>
    );
}

export { ReimagineGuide };