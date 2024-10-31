import "./tarjetaini.css"
import { Link } from "react-router-dom"
const TarjetaIni = ({ id, name, image, debut, classification, birthdate, kekkeiGenkai }) => {
    return (

        <article className="character-card" style={{ backgroundColor: 'blue' }} key={id * -1}>
            <Link className="character-link" to={`/detalles/${id}`}>
                <header className="character-header">
                    <h1 className="character-name">{name}</h1>
                    <img src={image} className="character-image" alt="personaje" />
                </header>
                <p className="character-birthdate">{birthdate}</p>
                <div className="character-details">
                    <p>
                        <strong>Kekkei Genkai:</strong>
                        {kekkeiGenkai ? <span>No kekkei Genkai</span> : kekkeiGenkai}
                    </p>
                    <p><strong>First Appearance:</strong> {debut.anime}</p>
                    <p><strong>Classification:</strong> {classification}</p>
                </div>
            </Link>
        </article>
    )
}

export default TarjetaIni
