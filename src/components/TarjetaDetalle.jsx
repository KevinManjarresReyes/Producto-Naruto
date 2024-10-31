/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import './tarjetadetalle.css';

import { bd } from '../firebase/firebaseConfig.js'
import { collection, addDoc, doc, deleteDoc, getDocs } from "firebase/firestore"

const TarjetaDetalle = ({ id, name, image, debut, birthdate, kekkeiGenkai, jutsu }) => {

    const [currentImage, setCurrentImage] = useState(image[0]);

    function handleImageClick(selectedImage) {
        setCurrentImage(selectedImage);
    }

    const characterData = {
        characterId: id,
        image: image[0],
        name: name,
        birthdate: birthdate
    };

    async function addChar(character) {
        await addDoc(collection(bd, 'favoritos'), character);
    }

    async function removeChar(favId) {
        try {
            await deleteDoc(doc(bd, "favoritos", favId));
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchFavorites() {
        try {
            const consult = await getDocs(collection(bd, "favoritos"));
            const favorites = consult.docs.map(doc => ({
                id: doc.id,
                characterId: doc.data().characterId
            }));
            return favorites;
        } catch (e) {
            console.error(e);
        }
    }

    async function toggleFavoriteCharacter(item) {
        const favorites = await fetchFavorites();
        const existingFavorite = favorites.find(fav => fav.characterId === item.characterId);

        if (existingFavorite) {
            await removeChar(existingFavorite.id);
        } else {
            await addChar(item);
        }
    }

    return (
        <article className="character-card">
            <div className="character-info">
                <header className="character-header">
                    <h1 className="character-name">{name}</h1>
                    <img src={currentImage} className="character-image" alt="personaje" />
                </header>
                <div className="character-details">
                    <p><strong>Birthdate: </strong>{birthdate}</p>
                    <p>
                        <strong>Kekkei Genkai:</strong> {kekkeiGenkai ? kekkeiGenkai : 'No kekkei Genkai'}
                    </p>
                    <p><strong>First Appearance:</strong> {debut.anime}</p>
                </div>
            </div>

            <ul className="image-selector">
                {image.map((item, index) => (
                    <button onClick={() => handleImageClick(item)} key={index}>
                        <img src={item} className="thumbnail" alt="button" />
                    </button>
                ))}
            </ul>

            <button onClick={() => toggleFavoriteCharacter(characterData)}>Favoritear</button>
        </article>
    );
};

export default TarjetaDetalle;
