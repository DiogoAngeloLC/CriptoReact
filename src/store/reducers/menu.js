const initialState = {
  opened: false,
  openedProfile: false,
};

export default function menu(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "MENU_TOGGLE":
      return {
        ...state,
        opened: !state.opened
      }

    case "MENU_TOGGLE_PROFILE":
      return {
        ...state,
        openedProfile: !state.openedProfile
      }
  
    default:
      return state;
  }
}