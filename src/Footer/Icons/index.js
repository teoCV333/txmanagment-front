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
            <li><img src={facebook}/></li>
            <li><img src={linkedin}/></li>
            <li><img src={instagram}/></li>
            <li><img src={pinterest}/></li>
            <li><img src={youtube}/></li>
            <li><img src={twitter}/></li>
        </ul>
       </div>
    );
}

export { Icons };