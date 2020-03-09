import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../../actions/smurfsActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddSmurfModal = ({ addSmurf }) => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const onSubmit = () => {
    if (name === '' || height === '' || age === '') {
      M.toast({ html: 'Please enter name, height, and age' });
    } else {
      const newSmurf = {
        name,
        height,
        age,
      };

      addSmurf(newSmurf);

      // Clear Fields
      setName('');
      setAge('');
      setHeight('');
    }
  };

  return (
    <div id='add-smurf-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter New Smurf</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor='name' className='active'>
              Smurf Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
          <input
          type='text'
          name='age'
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <label htmlFor='name' className='active'>
          Smurf Age
        </label>
          </div>
        </div>

        <div className='row'>
        <div className='input-field'>
        <input
        type='text'
        name='height'
        value={height}
        onChange={e => setHeight(e.target.value)}
      />
      <label htmlFor='name' className='active'>
        Smurf Height
      </label>
        </div>
      </div>

    
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default connect(null, { addSmurf })(AddSmurfModal);
