// src/js/actions/index.js
import { 
  ADD_STORE,
  UPDATE_STORE,
  DELETE_STORE,
  LIST_STORE,
  GET_USER,
  SET_USER
} from "../constants/actionTypes";
import { createAction } from 'redux-actions';

export const addStore = createAction(ADD_STORE);
export const updateStore = createAction(UPDATE_STORE);
export const deleteStore = createAction(DELETE_STORE);
export const listStore = createAction(LIST_STORE);
export const getUser = createAction(GET_USER);
export const setUser = createAction(SET_USER);