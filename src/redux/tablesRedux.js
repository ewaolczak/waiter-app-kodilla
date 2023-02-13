import { API_URL } from '../config';

//selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => res.json())
      .then((tables) => dispatch(updateTable(tables)));
  };
};

export const editTableRequest = (updateTable) => {
  return (dispatch) => {
    const tableOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateTable)
    };
    fetch(`${API_URL}/tables/${updateTable.id}`, tableOptions).then(() =>
      dispatch(editTable(updateTable))
    );
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    case UPDATE_TABLE:
      return [...action.payload];
    default:
      return statePart;
  }
};
export default tablesReducer;
