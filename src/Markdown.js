import React, { useState } from 'react';
import Ecriture from './Ecriture';
import Affichage from './Affichage';
import Bouton from './Bouton';
import Titres from './Titres';

const Markdown = () => {

  const [newTexte, setNewTexte] = useState('');

  const handleInputChange = (event) => {
    setNewTexte(event.target.value);
  };

  return (
    <div className='container-fluid bg-dark py-4'>
      <p className='text-white text-center fw-bold'>HEADER</p>
      <hr />
      <div className='row gy-2 mt-5 text-center'>
        
          <Titres />

          <Ecriture value={newTexte} onChange={handleInputChange}/>
        
          <Affichage texte={newTexte} />
      </div>
      
        <Bouton newTexte={newTexte} />
        
    </div>
  );
};

export default Markdown;
