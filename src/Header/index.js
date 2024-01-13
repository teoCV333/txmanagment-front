import './Header.css';
import { Logo } from './Logo';
import { LoginButton } from './LoginButton';
import { HomeButton } from './HomeButton';
import { useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const currentUrl = location.pathname;
    console.log('Current url: ',currentUrl);
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