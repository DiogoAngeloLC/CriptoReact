export const setSearchValueGlobal = (data) => {
  return (dispatch) => {
    dispatch({ type: "SEARCH_VALUE_GLOBAL", payload: data });
  };
};
