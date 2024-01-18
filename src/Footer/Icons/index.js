import './Icons.css';
import facebook from './facebook.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import pinterest from './pinterest.png';
import youtube from './youtube.png';
import twitter from './twitter.png';
import { useNavigate } from 'react-router-dom';

function Icons() {
    const navigate = useNavigate();
    return (
       <div className="icons-container">
         <ul >
            <li><img src={facebook} onClick={() => window.open('https://www.facebook.com/wellsfargo', '_blank')} alt=""/></li>
            <li><img src={linkedin} onClick={() => window.open('https://www.linkedin.com/company/wellsfargo', '_blank')} alt=""/></li>
            <li><img src={instagram} onClick={() => window.open('https://www.instagram.com/wellsfargo', '_blank')} alt=""/></li>
            <li><img src={pinterest} onClick={() => window.open('https://www.pinterest.de/wellsfargo', '_blank')} alt=""/></li>
            <li><img src={youtube} onClick={() => window.open('https://www.youtube.com/user/WELLSFARGO', '_blank')} alt=""/></li>
            <li><img src={twitter} onClick={() => window.open('https://twitter.com/wellsfargo', '_blank')} alt=""/></li>
        </ul>
       </div>
    );
}

export { Icons };