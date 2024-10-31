import { Outlet } from "react-router-dom"
import Navegacion from "../components/Navegacion"
import { bd } from '../firebase/firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from 'react';
import './plantilla.css'
export default function Plantilla() {
    const [favorites, setFavorites] = useState([]);

    const handleOpenDetails = (characterId) => {
        window.open(characterId, "_blank");
    };
    const [expandedItem, setExpandedItem] = useState(null);
    async function fetchFavorites() {
        try {
            const consult = await getDocs(collection(bd, "favoritos"));
            const favorites = consult.docs.map(doc => ({
                id: doc.id,
                characterId: doc.data().characterId,
                img: doc.data().image,
                name: doc.data().name,
                birthdate: doc.data().birthdate

            }));

            return favorites;
        } catch (e) {
            console.error(e);

        }
    }
    useEffect(() => {
        async function load() {
            const fav = await fetchFavorites()
            setFavorites(fav)


        }
        load();
    })
    const toggleExpand = (id) => {
        setExpandedItem(expandedItem === id ? null : id);
    };
    return (
        <div className="total">
            <Navegacion></Navegacion>
            <div className="">
                {favorites && favorites.map(fav => (
                    <div key={fav.id} className="favorite-item">
                        <div className="favorite-header" onClick={() => toggleExpand(fav.id)}>
                            <img src={fav.img} alt={fav.name} className="favorite-image" onClick={() => handleOpenDetails(fav.characterId)} />
                            <h2 className="favorite-name" onClick={() => handleOpenDetails(fav.characterId)}>{fav.name}</h2>
                        </div>
                        {expandedItem === fav.id && (
                            <div className="favorite-details">
                                <p><strong>ID:</strong> {fav.characterId}</p>
                                <p><strong>name:</strong> {fav.name}</p>
                                <p><strong>birthdate:</strong> {fav.birthdate}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Outlet></Outlet>
        </div>
    )
}
