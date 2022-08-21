import "./Nav.scss";
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai";
import {FcReadingEbook} from "react-icons/fc";
import {RiServiceLine,RiMessage2Line} from "react-icons/ri";
import {BiBookmarkAlt} from "react-icons/bi"
import { useState } from "react";

const Nav = () =>{
    const [active,setActive] = useState('#');

    return(
        <nav>
            <a href="#" className={active==="#"?"active":""} onClick={()=>setActive("#")}><AiOutlineHome/></a>
            <a href="#about" className={active==="about"?"active":""} onClick={()=>setActive("about")}><AiOutlineUser/></a>
            <a href="#experience" className={active==="experience"?"active":""} onClick={()=>setActive("experience")}><BiBookmarkAlt/></a>
            <a href="#service" className={active==="service"?"active":""} onClick={()=>setActive("service")}><RiServiceLine/></a>
            <a href="#contact" className={active==="contact"?"active":""} onClick={()=>setActive("contact")}><RiMessage2Line/></a>
        </nav>
    );
}
export default Nav;