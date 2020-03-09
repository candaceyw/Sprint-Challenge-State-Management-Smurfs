import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader'

import { getSmurf } from '../../actions/smurfsActions';
import SmurfInfo from '../smurfs/SmurfInfo';

const Smurfs = ({ smurfs, loading, getSmurf }) => {
    useEffect(() => {
        getSmurf();
        //eslint-disable-next-line
      }, []);

      if (loading || smurfs === null) {
        return <Preloader />;
      }


    return (
        <ul className='collection with-header'>
        <li className='collection-header'>
          <h1 className='center'>Welcome to Smurf Village</h1>
        </li>
        {!loading && smurfs.length === 0 ? (
          <p className='center'>No Smurfs available... </p>
        ) : (
          smurfs.map(smurf => <SmurfInfo name={smurf.name} age={smurf.age} height={smurf.height} smurfs={smurfs} id={smurf.id} key={smurf.id} />)
        )}
      </ul>
    )
}

Smurfs.propTypes = {
    smurfs: PropTypes.array.isRequired,
    getSmurf: PropTypes.func.isRequired
  };

const mapStateToProps = state => {
return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
};
  };

export default connect(mapStateToProps, {getSmurf})(Smurfs)
