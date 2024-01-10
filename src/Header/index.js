import './Header.css';
import { Logo } from './Logo';
import { LoginButton } from './LoginButton';

function Header() {
    return (
        <>
            <div className='header'>
                <ul>
                    <Logo className="logo"/>
                    <LoginButton />
                </ul>
            </div><div className='header-line'></div>
        </>
    );
}

export { Header };