import React from 'react'

const handleDownload = (newTexte) => {
    // Vérifier si le champ de saisie est vide
   if (newTexte.trim() === '') {
     alert("Veuillez entrer du texte avant de télécharger.");
     return;
   }

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

const Bouton = ({newTexte}) => {
  return (
    <div className='text-center my-4'>
      <button onClick={() => handleDownload(newTexte)} className='btn btn-primary fw-bold p-3 fs-5'>Download Text</button>
    </div>
  )
}

export default Bouton;
