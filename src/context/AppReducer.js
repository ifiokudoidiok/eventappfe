export default function appReducer(state, action) {
    switch (action.type) {
      case "SET_EVENTS":
        // An action that should be dispatched whenever data needs to be
        // refreshed from back-end. This will completely replace all events
        // in our app's state.
        return {
          ...state,
          events: action.payload
        };
      case "ADD_EVENT":
        return {
          ...state,
          events: [...state.events, action.payload]
        };
  
      case "EDIT_EVENT":
        const updatedEvent = action.payload;
  
        const updatedEvents = state.events.map((event) => {
          if (event.id === updatedEvent.id) {
            return updatedEvent;
          }
          return event;
        });
  
        return {
          ...state,
          events: updatedEvents
        };
  
      case "REMOVE_EVENT":
        return {
          ...state,
          events: state.events.filter((event) => event.id !== action.payload)
        };
  
      default:
        return state;
    }
  }
  