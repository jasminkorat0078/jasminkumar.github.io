import "./Footer.scss";
import {BsLinkedin,BsInstagram} from 'react-icons/bs';

const Footer = () =>{

    return(
        <footer>
            <a href="#" className="footer__logo"></a>
            <u className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#qualification">Qualification</a></li>
                <li><a href="#service">Skills</a></li>
                <li><a href="#service">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#contact">Contact</a></li>
            </u>
            <div className="footer__socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsInstagram/></a>
            </div>
        </footer>
    );
}
export default Footer;