import { Conditions } from './Conditions';
import './Footer.css';
import { Icons } from './Icons';

function Footer() {
    return (
        <div className="footer-content">
           <Icons/>
           <Conditions />
        </div>
    );
}

export { Footer };