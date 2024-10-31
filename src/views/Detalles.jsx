import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TarjetaDetalle from '../components/TarjetaDetalle';
import './detalles.css'; // Asegúrate de crear este archivo CSS

export default function Details() {
    const [characters, setCharacters] = useState(null);
    const url = 'https://dattebayo-api.onrender.com/characters';
    const { id } = useParams();

    async function ftc(url) {
        try {
            const response = await axios.get(`${url}/${id}`);

            setCharacters(response.data);

        } catch (error) {

            throw new Error(error);
        }
    }

    useEffect(() => {
        ftc(url);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='details-container'>
            {characters && (
                <TarjetaDetalle
                    id={characters.id}
                    name={characters.name}
                    image={characters.images}
                    debut={{
                        manga: characters.debut.manga,
                        anime: characters.debut.anime,
                        movie: characters.debut.movie
                    }}
                    classification={characters.personal.classification}
                    birthdate={characters.personal.birthdate}
                    kekkeiGenkai={characters.personal.kekkeiGenkai}
                    jutsu={characters.jutsu}
                />
            )}
        </div>
    );
}
