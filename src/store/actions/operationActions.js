export const addOperation = (operation) => ({
  type: "ADD_OPERATION",
  payload: operation,
});

export const clearHistory = () => ({ type: "CLEAR_HISTORY" });
