import "./Header.scss";
import CTA from "./CTA";
import ME from "../../assets/me2.png";
import HeaderSocial from "./HeaderSocial";


const Header = () => {

  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1 className="headline--jump">Jasminkumar Korat</h1>
            <h5 className="text-light">Frontend developer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
                {/* <img src={ME} alt="My image" /> */}
                <div>Secure a responsible career opportunity to fully utilize my training and skills, while making a significant contribution to the success of the company.</div>
            </div>
            <a href="#contact" className="scroll__down">Scroll down</a>

        </div>
    </header>
  );
};
export default Header;
