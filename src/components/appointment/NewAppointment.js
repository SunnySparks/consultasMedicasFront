import React from 'react';
import '../../styles/global.scss';

const NewAppointment = () => {
  return (
    <div className="webfont outerForm">
        <h2>Crear Cita</h2>
        <div className="innerForm">
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
                <input type="submit" value="Añadir" className="submit"></input>
            </form>
        </div>
    </div>
  )
}

export default NewAppointment