import { Link } from 'react-router-dom';
import './Logo.css';
import logo from './title.png';

function Logo() {
    return (
        <li className='title'>
            <Link to="/">
                <img src={logo} alt='logo'/>
            </Link>
            
        </li>
    );
}

export { Logo };