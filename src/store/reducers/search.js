const initialState = {
  searchValue: "",
};

export default function setSearch(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "SEARCH_VALUE_GLOBAL":
      return {
        ...state,
        searchValue: payload,
      };

    default:
      return state;
  }
}
