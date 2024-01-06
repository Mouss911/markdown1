import React, { useState } from 'react';

const Ecriture = () => {

  const [newTexte, setNewTexte] = useState('');

  const handleInputChange = (event) => {
    setNewTexte(event.target.value);
  };

  // Fonction pour gérer le téléchargement du texte
  const handleDownload = () => {
    const blob = new Blob([newTexte], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    // Créer un élément <a> pour déclencher le téléchargement
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.txt';

    // Simuler le clic sur le lien pour déclencher le téléchargement
    link.click();

    // Libérer l'URL de l'objet Blob
    URL.revokeObjectURL(url);
  };

  return (
    <div className='container-fluid bg-dark py-4'>
      <p className='text-white text-center fw-bold'>HEADER</p>
      <hr />
      <div className='row mt-5 text-center'>
        <h1 className='text-white'>Markdown Editor</h1>
        <h6 className='text-light my-3'>You can type in html tags as well</h6>

        {/* Champ de saisie */}
        <div className='col-md-8 col-sm-12'>
          <textarea
            className="border border-success w-100 text-black fw-bold gauche"
            type="text"
            placeholder="Saisir un texte..."
            value={newTexte}
            onChange={handleInputChange}
          />
        </div>

        {/* Champ de lecture */}
        <div className='col-md-4 col-sm-12'>
          <textarea 
            value={newTexte} 
            className='border border-warning w-100 text-black fw-bold droite' 
            readOnly 
          />
        </div>
      </div>
      <div className='text-center my-4'>
        <button onClick={handleDownload} className='btn btn-primary fw-bold p-3 fs-5'>Download Text</button>
      </div>
    </div>
  );
};

export default Ecriture;
