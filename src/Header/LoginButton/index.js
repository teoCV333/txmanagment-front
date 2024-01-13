import { Link } from 'react-router-dom';
import './LoginButton.css';

function LoginButton() {
    return (
        <li>
            <Link to="/get-into" className="login-btn">Get into</Link>
        </li>
    )
}

export { LoginButton };