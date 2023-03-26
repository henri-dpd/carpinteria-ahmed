
import './NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar({theme, switchTheme}) {
    
  return (
    <div className='NavBar'>
        <nav>
            <ul>
                <li><Link to='/'>Principal</Link></li>
                <li><Link to='/Gallery'>Gallería</Link></li>
                <li><Link to='/Contact'>Contacto</Link></li>
            </ul>
        </nav>
        
        <button className='ThemeBtn' onClick={switchTheme}>
            Tema {theme === 'dark' ? 'oscuro' : 'claro'} theme
        </button>
    </div>
  );
}
