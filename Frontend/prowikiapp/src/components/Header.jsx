import "./Header.css"
import user_icon from "/src/assets/user.svg"
import sun from "/src/assets/theme-switch.svg"
import logo from "/src/assets/favicon-32x.png"
import plus_icon from "/src/assets/plus.svg"
import { A } from "@solidjs/router";


function changeTheme() {
    let htmlTag = document.querySelector('html');
    var theme = htmlTag.getAttribute("data-theme");

    if(theme == undefined || theme == "light"){
        htmlTag.setAttribute('data-theme', 'dark');
    } else{ htmlTag.setAttribute('data-theme', 'light');}
}

let inpValue = localStorage.getItem("currKeyword");


function Header() {

    function handleSubmit(ele) {
        if(event.keyCode == 13) {
            console.log("Hallo");
            localStorage.setItem("currKeyword", document.getElementById("searchbar").value) 
            window.location.href = "../"   
        }
    }

    return (
        <div>
            <div class="container header">

                <nav>
                    <ul>
                        <li>
                            <input type="search" onKeyDown={handleSubmit} id="searchbar" value={inpValue} placeholder={"Suchen"} />
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

                        <li>
                        <div class="toggle" onClick={changeTheme}>
                            <svg class="sun-and-moon" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
                                <mask class="moon" id="moon-mask">
                                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                                <circle cx="24" cy="10" r="6" fill="black" />
                                </mask>
                                <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
                                <g class="sun-beams" stroke="currentColor">
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </g>
                            </svg>
                        </div>

                        </li>
                        

                        <A href="/postarticle">
                            <img src={plus_icon} alt="User" class="headersvg" />

                        </A>

                        <A href="/profile">
                            <li data-tooltip="User" id="user" data-placement="right" style="border-bottom: none; cursor: pointer;">
                                <img src={user_icon} alt="User" class="headersvg" />
                            </li>
                        </A>

                    </ul>
                </nav>

            </div>
        </div>
    );
}

export default Header;



