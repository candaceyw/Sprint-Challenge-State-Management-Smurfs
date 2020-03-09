
import {
  SMURFS_START,
  SMURFS_SUCCESS,
  SMURFS_FAIL,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  UPDATE_SMURF,
  UPDATE_SUCCESS,
  SET_CURRENT,
  DELETE_SMURF,
  CLEAR_CURRENT,
  SEARCH_SMURF,
  SET_LOADING
} from '../actions/smurfsActions'

const initialState = {
  smurfs: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SMURFS_START:
    return {
      ...state,
      loading: true,
      error: null
    }
  case SMURFS_SUCCESS:
    return {
      ...state,
      smurfs: action.payload,
      loading: false,
      error: null
    }
  case SMURFS_FAIL:
    return {
      ...state,
      smurfs: [],
      loading: false,
      error: action.payload
    }
    case ADD_SMURF_START:
    return {
      ...state,
      loading: true,
      error: ""
    };
  case ADD_SMURF_SUCCESS:
    return {
      ...state,
      loading: false,
      smurfs: [...action.payload]
    };
  case ADD_SMURF_FAIL:
    return {
      ...state,
      loading: false,
      error: action.payload
    };
   
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
        loading: false
      };
     case UPDATE_SMURF:
        return {
        ...state,
        loading: true,
        error: ""
      };

    case UPDATE_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf =>
          smurf.id === action.payload.id ? action.payload : smurf
        )
      };

    case SEARCH_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case SET_CURRENT:
    return {
      ...state,
      current: action.payload
    };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
      case SET_LOADING:
        return {
          ...state,
          loading: true
        };
  default: 
    return state;
}
}
   