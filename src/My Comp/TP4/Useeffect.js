// Useeffect.js
import React, { useEffect, useState } from 'react';
import './Useeffect.css'; // Importez le fichier CSS
import LD from '../LD';
export default function Useeffect() {
  // Déclaration de l'état pour l'URL de l'image
  const [srcim, setsrcim] = useState();

  useEffect(() => {
    // Appel à l'API "The Cat API" pour obtenir une image aléatoire de chat
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((data) => {
        // Sélectionner l'URL de l'image à partir des données de la réponse
        if (data && data[0] && data[0].url) {
          setsrcim(data[0].url);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="useeffect-container">
      {srcim && <img src={srcim} alt="Cat" />} {/* Vérification si srcim est défini avant d'afficher l'image */}
      <LD></LD>
    </div>
  );
}
