import React from 'react'

const NewAppointment = () => {
  return (
    <div id="addAppointmentCont">NewAppointment
        <div class="formCont">
            <form>
            <label>Elegir Paciente</label>
                <select name ="paciente">
                    <option value ="patient1">Patient1</option>
                    <option value ="patient2">Patient2</option>
                    <option value ="patient3">Patient3</option>
                </select>
                <label>Elegir Fecha</label>
                <input type="date" value={new Date().toLocaleDateString('en-GB')}></input>
                <label>Ingresar signos vitales</label>
                <input type="text" value="vitals"></input>
                <label>Notas</label>
                <input type="text" value="notas" className="notesCont"></input>
                <input type="submit" value="Añadir" id="submit"></input>
            </form>
        </div>
    </div>
  )
}

<div id="addPatientCont">
        Patient Add
        <div class="formCont">
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

export default NewAppointment