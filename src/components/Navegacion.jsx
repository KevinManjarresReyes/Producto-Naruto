import './navegacion.css'
import { Link } from 'react-router-dom'
import naruto from '../assets/naruto.webp'
const Navegacion = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <Link to={'/'} className="logo">
                    <img src={naruto} alt="Naruto Logo" className="logo-image" />
                </Link>

                <h1 className='title'>Naruto API</h1>
                <ul className="nav-list">
                    <li>
                        <Link to={'/'} className="nav-link">Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/all'} className="nav-link">Personajes</Link>
                    </li>
                    <li>
                        <Link to={'/about'} className="nav-link">Acerca de</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navegacion
