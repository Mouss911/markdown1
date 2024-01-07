import React from 'react'

const Ecriture = ({ value, onChange }) => {
  return (
    <div className='col-md-8 col-sm-12'>
        <textarea
            className="border border-success w-100 text-black fw-bold gauche"
            type="text"
            placeholder="Saisir un texte..."
            value={value}
            onChange={onChange}
        />
    </div>
  )
}

export default Ecriture;
