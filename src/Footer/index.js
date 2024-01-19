import { Conditions } from './Conditions/index.js';
import './Footer.css';
import { Icons } from './Icons/index.js';

function Footer() {
    return (
        <div className="footer-content">
           <Icons/>
           <Conditions />
        </div>
    );
}

export { Footer };