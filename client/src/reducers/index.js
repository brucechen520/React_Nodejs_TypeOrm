// import { handleActions } from 'redux-actions';
// import { ClientState } from '../constants/models';
// import { 
//     LISTSTORE, 
//     UPDATESTORE,
//     ADDSTORE,
//     DELETESTORE,
//     GETUSER,
//     SETUSER
// } from "../constants/actionTypes";

// const initialState = {
//     isLoggedIn: false,
//     user: {
//         id: '',
//         lineid: '',
//         email: '',
//         firstname: '',
//         lastname: '',
//         address: '',
//         phone: '',
//     },
//     // title: 店家名稱
//     // address: 店家地址
//     // phone: 店家電話
//     // owner: 店家負責人
//     stores: [{
//         title: '小秘苑燒肉餐酒',
//         address: '新北市板橋區中山路一段285號1樓',
//         phone: '+886289531810',
//         owner: 'Mr. Wang'
//     }],
// };

// const reducer = (state = ClientState, action) => {
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

// export default reducer;

import { combineReducers } from 'redux-immutable';
import store from './storeReducers';

const rootReducer = combineReducers({
    store,
});

export default rootReducer;