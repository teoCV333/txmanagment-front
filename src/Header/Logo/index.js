import './Logo.css';
import logo from './title.png';

function Logo() {
    return (
        <li className='title'>
            <img src={logo} alt='logo'/>
        </li>
    );
}

export { Logo };