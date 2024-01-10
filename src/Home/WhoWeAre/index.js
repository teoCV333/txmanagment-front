import './WhoWeAre.css';
import we from './whoweare.png';

function WhoWeAre() {
    return (
        <div className="who-we-are">
            <div className='we-img'>
                <img src={we} />
            </div>
            <div className="who-we-are-content">
                <h1>Who we are</h1>
                <h3>Wells Fargo helps strengthen communities through diversity, equity, and inclusion, economic empowerment, and sustainability.</h3>  
            </div>
            <button>About Wells Fargo</button>
        </div>
    );
}

export { WhoWeAre };