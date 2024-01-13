import { Link } from 'react-router-dom';
import './HomeButton.css';

function HomeButton() {
    return (
        <li>
            <Link to="/" className="home-btn">Home</Link>
        </li>
    )
}

export { HomeButton };