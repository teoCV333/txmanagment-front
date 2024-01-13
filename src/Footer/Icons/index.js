import './Icons.css';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import pinterest from './pinterest.png';
import youtube from './youtube.png';
import twitter from './twitter.png';

function Icons() {
    return (
       <div className="icons-container">
         <ul >
            <li><img src={facebook} alt=""/></li>
            <li><img src={linkedin} alt=""/></li>
            <li><img src={instagram} alt=""/></li>
            <li><img src={pinterest} alt=""/></li>
            <li><img src={youtube} alt=""/></li>
            <li><img src={twitter} alt=""/></li>
        </ul>
       </div>
    );
}

export { Icons };