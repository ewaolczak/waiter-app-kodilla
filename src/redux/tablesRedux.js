//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) =>
  tables.find((table) => table.id === tableId);

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;
const EDIT_TABLE = createActionName('EDIT_TABLE');

// action creators
export const editTable = (payload) => ({ type: EDIT_TABLE, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};
export default tablesReducer;
