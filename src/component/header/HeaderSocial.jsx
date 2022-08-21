import {BsLinkedin,BsInstagram} from 'react-icons/bs';

const HeaderSocial = () =>{

    return(
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsInstagram/></a>
        </div>
    );
}

export default HeaderSocial;