import { connect } from 'react-redux';
import DeleteStore from '../../components/store/delete_store';

import {
  deleteStore,
  listStore,
} from '../../actions';

export default connect(
  (dispatch) => ({
    onDeleteStore: (event, store) => {
      dispatch(deleteStore(store));
      dispatch(listStore());
    }
  })
)(DeleteStore);