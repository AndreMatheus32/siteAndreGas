import React , {useState} from 'react';
import '../NavBar.css';


function NavBar() {

    const [active , setActive] = useState('nav_menu');
    const [toggleIcon , setToggleIcon] = useState('nav_toggler')

    const navToggle = () => {
        active === 'nav_menu' ? setActive('nav_menu nav_active') :
        setActive('nav_menu');

        toggleIcon === 'nav_toggler' ? setToggleIcon('nav_toggler toggle') : setToggleIcon('nav_toggler') ;
    }

    return (
        <nav className='nav'>
            <h1 className='logo'>André Gás</h1> 
            <ul className={active}>
                <li className='nav_item'><a href='#contato' className='nav_link'>Contato</a></li>
                <li className='nav_item'><a href='#segurança' className='nav_link'>Segurança</a></li>
                <li className='nav_item'><a href='#localizaçao' className='nav_link'>Localização</a></li>
                <li className='nav_item'><a href='#produtos' className='nav_link'>Produtos</a></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
    );
}

export default NavBar;