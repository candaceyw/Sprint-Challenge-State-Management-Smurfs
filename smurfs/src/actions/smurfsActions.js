import axios from 'axios';

export const SMURFS_START = 'SMURFS_START';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_FAIL = 'SMURFS_FAIL';
export const ADD_SMURF_START = "ADD_SMURF_START";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const CLEAR_CURRENT = "CLEAR_CURRENT";
export const SET_CURRENT = 'SET_CURRENT';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const SET_LOADING = 'SET_LOADING'
export const DELETE_SMURF = "DELETE_SMURF";
export const SEARCH_SMURF = "SEARCH_SMURF"

// Get smurfs from server

export const getSmurf = () => dispatch => {
  
    dispatch({ type: SMURFS_START });
    
        return axios.get(`http://localhost:3333/smurfs`)
        .then(res=> {
          console.log(res.data)
          dispatch({ type: SMURFS_SUCCESS, payload: res.data });
        }
          )
          .catch(err => {
            console.log('err', err);
      
            dispatch({
              type: SMURFS_FAIL,
              payload: err
            });
          }); 
    }

// Add smurfs to db
    export const addSmurf = (smurfs) => dispatch => {
      dispatch({ type: SMURFS_START });
      axios
        .post(`http://localhost:3333/smurfs`, smurfs)
        .then(res => {
          console.log("addSmurf:", res)
          dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: ADD_SMURF_FAIL, payload: err});
        });
    }

          //Delete  smurf from server
export const deleteSmurf = id => dispatch => {
  console.log('deletesmurf', id)
  dispatch({ type: DELETE_SMURF  });

  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    console.log("deleteSmurf:", res.data)
    dispatch({ type: DELETE_SMURF, payload: id });
  })
  .catch(err => {
    dispatch({ type: ADD_SMURF_FAIL, payload: err});
  });
}
 
    // Update Smurf on server
export const updateSmurf = smurfs => dispatch => {
  console.log("Update Smurf:", smurfs)

  dispatch({ type: UPDATE_SMURF });
  axios
  .put(`http://localhost:3333/smurfs/${smurfs.id}`, smurfs)
  .then(res => {
          // console.log("Update Smurf:", res)
          dispatch({ type: UPDATE_SUCCESS, payload: res.data});
        })
        .catch(err => {
          dispatch({ type: ADD_SMURF_FAIL, payload: err});
        });
      }


// Search Smurfs
export const searchSmurf = text => dispatch => {
  dispatch({ type: SEARCH_SMURF  });

  axios
  .get(`http://localhost:3333/smurfs?q=${text}`)
  .then(res => {
    dispatch({ type: SEARCH_SMURF, payload: res.data});
  })
  .catch(err => {
    dispatch({ type: ADD_SMURF_FAIL, payload: err});
  });
}
 


    // Set current smurf
export const setCurrent = smurfs => {
  return {
    type: SET_CURRENT,
    payload: smurfs
  };
};

    // Clear current smurf
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
