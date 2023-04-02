import React from 'react';

const addPatient = () => {
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
            </form>
        </div>
    </div>
  )
}

export default addPatient;