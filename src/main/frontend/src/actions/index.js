import { createStore } from "redux";

const userReducer = (state = { isUser: false, id: Number }, action) => {
  if (action.type === "ADD_USER") {
    return {
      isUser: (state.isUser = true),
      id: (state.id = Number),
    };
  }

  if (action.type === "ALL_USER") {
    return {
      isUser: (state.isUser = false),
    };
  }

  if (action.type === "EDIT_USER") {
    return {
      isUser: (state.isUser = true),
      id: (state.id = action.id),
    };
  }

  return state;
};

const store = createStore(userReducer);

export default store;
