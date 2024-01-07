import React from 'react';

const Affichage = ({texte}) => {
  return (
    <div className='col-md-4 col-sm-12'>
      <textarea 
        value={texte} 
        className='border border-warning w-100 text-black fw-bold droite' 
        readOnly 
      />
    </div>
  )
}

export default Affichage;
