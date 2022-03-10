import React from 'react';
import './App.css';
import PersonList from './Components/MedicinaList';
import CreatePersonForm from './Components/CreateMedicinaForm';
import UpdatePersonForm from './Components/UpdatePersonForm';
    
    function App() {
      return (
        <div className="App">      
          <h1>Registrar medicina</h1>
          <CreatePersonForm />
          <br/>
          <hr />
          <h1>Actualizar registros</h1>
          <UpdatePersonForm /> 
          <br/>
          <hr />
          <h1>Lista de medicinas</h1>
          <br/>
          <PersonList />
          <br/> 
          <br/>
          <br/>
        </div>
      );
    }

export default App;
