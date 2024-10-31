import PropTypes from 'prop-types';
import TarjetaIni from '../components/TarjetaIni';
import './inicio.css'; 

export default function Inicio({ characters }) {
    return (
        <div className='home-container'>
            {characters.map(item => (
                <TarjetaIni
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.images[0]}
                    debut={{
                        manga: item.debut.manga,
                        anime: item.debut.anime,
                        movie: item.debut.movie
                    }}
                    classification={item.personal.classification}
                    status={item.personal.status}
                    kekkeiGenkai={item.personal.kekkeiGenkai}
                    jinchūriki={item.personal.jinchūriki}
                    uniqueTraits={item.uniqueTraits}
                />
            ))}
        </div>
    );
}

Inicio.propTypes = {
    characters: PropTypes.array.isRequired,
};