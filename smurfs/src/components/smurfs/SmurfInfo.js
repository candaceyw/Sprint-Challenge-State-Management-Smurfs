import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf, setCurrent}  from '../../actions/smurfsActions';
import M from 'materialize-css/dist/js/materialize.min.js';

  const SmurfInfo= ({smurfs, id, name, age, height, deleteSmurf, setCurrent} ) => {

  const onDelete = () => {
    deleteSmurf(id);
    M.toast({ html: 'smurf deleted' });
  };

  return (
   <li className="collection-item">
    <div key={id}>
    <a
          href='#edit-smurf-modal' className='modal-trigger' onClick={() => setCurrent(smurfs)}><h2>{name}</h2></a>
      
        <div>
          <br />
          <span className='grey-text'>
            <span className='black-text'>Age: {age}</span>
            <br />
            <span className='black-text'>Height: {height}</span> 
          </span>
          <a href='#!' onClick={onDelete} className='secondary-content'>
            <i className='material-icons grey-text'>delete</i>
          </a>
        </div>
    </div>
   </li>
   
  );
};


export default connect(null, {deleteSmurf, setCurrent})(SmurfInfo);