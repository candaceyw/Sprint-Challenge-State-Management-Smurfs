import React, { Fragment, useEffect } from 'react';
import "./App.css";

import Smurfs from './smurfs/Smurfs'
import SearchBar from './layout/SearchBar'
import AddSmurfModal from './smurfs/AddSmurfModal'
import AddBtn from './layout/AddBtn';
import EditSmurfModal from './smurfs/EditSmurfModal'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
   
    return (

      <Fragment>
        {/* <SearchBar /> */}
        <div className='container'>

        <Smurfs />
        <AddSmurfModal />
        <EditSmurfModal />
        </div>
        <AddBtn />

      </Fragment>
    );
  }


export default App;
