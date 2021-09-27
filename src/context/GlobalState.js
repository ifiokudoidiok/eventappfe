import React, { createContext, useReducer } from "react";
import axios from "axios";

import appReducer from "./AppReducer";

const initialState = {
  events: []
};

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  React.useEffect(() => {
    axios
      .get("https://eventappbe.herokuapp.com/events")
      .then((res) => {
        // Dispatch SET_EVENTS action, when data is retrieved.
        dispatch({ type: "SET_EVENTS", payload: res.data });
      })
      .catch((err) => err);
  }, []); // Only run once, on mount. Can be changed if necessary.

  function addEvent(event) {
    dispatch({
      type: "ADD_EVENT",
      payload: event
    });
  }

  function editEvent(event) {
    dispatch({
      type: "EDIT_EVENT",
      payload: event
    });
  }

  function removeEvent(id) {
    dispatch({
      type: "REMOVE_EVENT",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        events: state.events,
        addEvent,
        editEvent,
        removeEvent,
        state
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
