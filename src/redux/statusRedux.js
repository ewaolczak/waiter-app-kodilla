import { editTable } from './tablesRedux';

//selectors
export const getAllStatuses = ({ status }) => status;

// actions
const createActionName = (actionName) => `app/status/${actionName}`;
const UPDATE_STATUS = createActionName('UPDATE_STATUS');

// action creators
const updateStatus = (payload) => ({ type: UPDATE_STATUS, payload });

export const fetchStatus = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/status')
      .then((res) => res.json())
      .then((status) => dispatch(updateStatus(status)));
  };
};

export const updateStatusRequest = (updateStatus) => {
  return (dispatch) => {
    const statusOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateStatus)
    };
    fetch('http://localhost:3131/api/status', statusOptions).then(() =>
      dispatch(editTable(updateStatus))
    );
  };
};

const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default statusReducer;
