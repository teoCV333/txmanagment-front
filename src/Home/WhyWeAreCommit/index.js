import './WhyWeAreCommit.css';
import why from './why.png';

function WhyWeAreCommit() {
    return (
        <div className="why-we-are">
            <div className='why-img'>
                <img src={why} alt=""/>
            </div>
            <div className="why-we-are-content">
                <h1>Why we're committed to communities</h1>
                <h3>We don't just serve our communities—we are our communities. We're committed to helping customers and neighborhoods across the country thrive.</h3>  
            </div>
            <button>Wells Fargo Stories</button>
        </div>
    );      
}

export { WhyWeAreCommit };