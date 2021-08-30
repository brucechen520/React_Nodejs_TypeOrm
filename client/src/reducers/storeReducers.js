// import {
//   CREATE_TODO,
//   DELETE_TODO,
//   CHANGE_TEXT,
//   SHOW_ALL,
//   SHOW_COMPLETED,
//   EDIT_TODO,
//   RESERVE_TEXT
// } from '../../constants/actionTypes';

//  const todoReducers = handleActions({
//   CREATE_TODO: (state, { payload }) => {
//     let todos = state.get('todos').push(state.get('todo'));
//     return state.set('todos', todos);
//   },
//   DELETE_TODO: (state, { payload }) => {
//     return state.set('todos', state.get('todos').splice(payload.index, 1))
//   },
//   CHANGE_TEXT: (state, { payload }) => {
//     return state.setIn(['todos', payload.index, 'text'], payload.text);
//   },
//   COMPLETE_TODO: (state, { payload }) => {
//     return state.setIn(['todos', payload.index, 'completed'], !payload.status);
//   },
//   SHOW_ALL: (state) => (
//     state.set('filter', 'show_all')
//   ),
//   SHOW_COMPLETED: (state) => (
//     state.set('filter', 'show_completed')
//   ),
//   EDIT_TODO: (state, { payload }) => {
//     return state.setIn(['todos', payload.index, 'isEdit'], !payload.isEdit);
//   },
//   RESERVE_TEXT: (state, { payload }) => {
//     return state.setIn(['todo', 'text'], payload);
//   }
// }, TodoState);

// export default todoReducers;


import { handleActions } from 'redux-actions';
import { ClientState } from '../constants/models';
import { 
    LISTSTORE, 
    UPDATESTORE,
    ADDSTORE,
    DELETESTORE,
    GETUSER,
    SETUSER
} from "../constants/actionTypes";


const storeReducers = handleActions({
    LISTSTORE: (state, { payload }) => {
        let stores = state.get('stores')
    },
    UPDATESTORE: (state, { payload }) => {
        
    },
    ADDSTORE: (state, { payload }) => {
        
    },
    DELETESTORE: (state, { payload }) => {
        
    },
    GETUSER: (state, { payload }) => {
        
    },
    SETUSER: (state, { payload }) => {

    }
}, ClientState)

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'LISTSTORE':
//             return
//         case 'UPDATESTORE':
//             return
//         case 'ADDSTORE':
//             return
//         case 'DELETESTORE':
//             return
//         case 'GETUSER':
//             return
//         case 'SETUSER':
//             return
//         default:
//             return
//     }
// }

export default storeReducers;