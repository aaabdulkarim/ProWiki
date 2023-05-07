import "./Header.css"
import setting_icon from "/src/assets/settings.svg"
import user_icon from "/src/assets/user.svg"

function Header() {
    return (
    <div>
        <nav>
            <ul>
                <li>
                    <input type="search" />
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
                <li>
                    <img src={setting_icon} alt="Settings" id="setting"/>    
                </li>

                <div class="svg_container">

                    <li>
                        <img src={user_icon} alt="User" id="user"/>    
                    </li>
                </div>
                
            </ul>
        </nav>
        
    </div>
    );
}

export default Header;



