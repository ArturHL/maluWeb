import './index.css'
import { FaUser } from "react-icons/fa";
import { MdRestaurant } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { PiPhoneFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

function Navbar (){
    function toggleMenu() {
        const dropDownMenu = document.querySelector(".dropDownMenu");
        if (dropDownMenu.classList.contains("inactive")) {
            dropDownMenu.classList.remove("unDrop");
            dropDownMenu.classList.remove("inactive");
            setTimeout(() => {
            dropDownMenu.classList.add("drop");
            }, 20);
        } else {
            dropDownMenu.classList.add("unDrop");
            setTimeout(() => {
            dropDownMenu.classList.remove("drop");
            dropDownMenu.classList.add("inactive");
            }, 510);
        }
    }
    function closeMenu() {
        const menu = document.querySelector('.dropDownMenu');
        const checkbox = document.getElementById('checkbox2');

        if (menu && checkbox) {
            menu.classList.remove('drop');
            menu.classList.add('unDrop');

            setTimeout(() => {
            menu.classList.add('inactive');
            menu.classList.remove('unDrop');
            }, 500);
            
            checkbox.checked = false;
        }
    }
    return (
        <>
            <nav className='nav'>
                <a href='/home'><img src="Logo 2017.png" alt="" className='logo'/></a>
                <div className='shopMenuSection'>
                <div className='btnMenuNav'>
                    <input type="checkbox" id="checkbox2" className="checkbox2 visuallyHidden" onClick={toggleMenu}/>
                    <label htmlFor="checkbox2">
                    <div className="hamburger hamburger2">
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                    </div>
                    </label>
                </div>
                </div>
                <div className='menuDesktop'>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/eventos'>Eventos</a></li>
                    <li><a href='/contactanos'>Contactanos</a></li>
                </ul>
                </div>
            </nav>

            <menu className='dropDownMenu inactive'>
            <ul>
                <li><a href='/home' onClick={closeMenu}><GoHomeFill /> Home</a></li>
                <li><a href='/menu' onClick={closeMenu}><MdRestaurant /> Menu</a></li>
                <li><a href='/eventos' onClick={closeMenu}><FaCalendarAlt /> Eventos</a></li>
                <li><a href='/contactanos' onClick={closeMenu}><PiPhoneFill /> Contactanos</a></li>
            </ul>
            </menu>
        </>
    )
}

export default Navbar