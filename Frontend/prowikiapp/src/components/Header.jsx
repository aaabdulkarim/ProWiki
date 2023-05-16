import "./Header.css"
import user_icon from "/src/assets/user.svg"
import logo from "/src/assets/favicon-32x.png"
import { A } from "@solidjs/router";

function Header() {
    return (
    <div class="container header">
        <nav>
            <ul>
                <li>
                    <input type="search" placeholder="Suchen"/>
                </li>
            </ul>
            <ul>
                <li>
                <img src={logo} alt="User" class="headersvg" />    

                </li>
                <li>
                    <strong>
                    ProWiki
                    </strong>
                </li>
            </ul>
            <ul>

                <A href="/profile">
                    <li data-tooltip="User" id="user" data-placement="right" style="border-bottom: none; cursor: auto;">
                        <img src={user_icon} alt="User" class="headersvg" />    
                    </li>
                
                </A>
                
            </ul>
        </nav>
        
    </div>
    );
}

export default Header;



