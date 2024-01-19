import './Header.css';
import { Logo } from './Logo/index.js';
import { LoginButton } from './LoginButton/index.js';
import { HomeButton } from './HomeButton/index.js';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const currentUrl = location.pathname;
    return (
        <>
            <div className='header'>
                <ul>
                    <Logo className="logo"/>
                    {(!/\/get-into(?:\/[^/]+)?/.test(currentUrl))&&(<LoginButton />)}
                    {(/\/get-into(?:\/[^/]+)?/.test(currentUrl))&&(<HomeButton />)}
                </ul>
            </div><div className='header-line'></div>
        </>
    );
}

export { Header };