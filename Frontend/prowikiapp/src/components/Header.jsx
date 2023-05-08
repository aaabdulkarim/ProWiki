import "./Header.css"
import user_icon from "/src/assets/user.svg"

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
                    <strong>
                    ProWiki
                    </strong>
                </li>
            </ul>
            <ul>

                <li data-tooltip="User" id="user" data-placement="right" style="border-bottom: none; cursor: auto;">
                    <img src={user_icon} alt="User" class="headersvg" />    
                </li>
                
            </ul>
        </nav>
        
    </div>
    );
}

export default Header;



