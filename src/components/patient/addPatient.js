import React from 'react';
import '../../styles/global.scss';

const AddPatient = () => {
  return (
    <div className="webfont outerForm">
        <h2>Agregar Paciente</h2>
        <div className="innerForm">
            <form>
                <label>Nombre</label>
                <input type="text" value="nombre" className="dataCont"></input>
                <label>Apellido</label>
                <input type="text" value="apellido" className="dataCont"></input>
                <label>Correo</label>
                <input type="text" value="correo" className="dataCont"></input>
                <label>Notas</label>
                <input type="text" value="notas" className="notesCont"></input>
                <input type="submit" value="Añadir" className="submit"></input>
            </form>
        </div>
    </div>
  )
}

export default AddPatient;