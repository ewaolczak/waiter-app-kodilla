//selectors
export const getAllStatuses = (state) => state.status;

// actions
const createActionName = (actionName) => `app/tables/${actionName}`;

// action creators

const statusReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
};
export default statusReducer;
