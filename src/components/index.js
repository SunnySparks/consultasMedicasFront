import React from 'react'
import AddPatient from './patient/AddPatient';
import NewAppointment from './appointment/NewAppointment';

const Layout = () => {
  return (
    <div id="index">
      <AddPatient />
      <NewAppointment />
    </div>
  )
}

export default Layout