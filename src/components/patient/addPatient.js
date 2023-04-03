import React from 'react';

const AddPatient = () => {
  return (
    <div id="addPatientCont">
        Patient Add
        <div id="formCont">
            <form>
                <label>Nombre</label>
                <input type="text" value="nombre" className="nombreCont"></input>
                <label>Apellido</label>
                <input type="text" value="apellido" className="nombreCont"></input>
                <label>Correo</label>
                <input type="text" value="correo" className="nombreCont"></input>
                <label>Notas</label>
                <input type="text" value="notas" className="notesCont"></input>
                <input type="submit" value="Añadir" id="submit"></input>
            </form>
        </div>
    </div>
  )
}

export default AddPatient;