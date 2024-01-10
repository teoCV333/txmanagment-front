import { Link } from 'react-router-dom';
import './LoginButton.css';

function LoginButton() {
    return (
        <li>
                <button className="login-btn">
                    <Link to="/get-into" >Get into</Link>
                </button>
        </li>
    )
}

export { LoginButton };