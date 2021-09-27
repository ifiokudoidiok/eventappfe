import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";


import { Box, Input, } from "@chakra-ui/react"

import Calendar from "react-calendar";
import moment from "moment";

import axios from "axios";

import "react-calendar/dist/Calendar.css";

import { GlobalContext } from "../context/GlobalState";

export const EditEvent = (route) => {
  let history = useHistory();

  const { editEvent, events } = useContext(GlobalContext);

  const today = new Date();

  const [selectedEvent, setSelectedEvent] = useState({
    id: null,
    title: "",
    description: "",
    start_date: "",
    end_date: ""
  });

  const currentEventId = route.match.params.id;

  useEffect(() => {
    const eventId = currentEventId;
    const selectedEvent = events.find(
      (currentEventTraversal) => currentEventTraversal.id === parseInt(eventId)
    );
    console.log(selectedEvent, "Selected Event");

    setSelectedEvent(selectedEvent);
  }, [currentEventId, events]);

  const onSubmit = (e) => {
    e.preventDefault();

    editEvent({
      ...selectedEvent,
      start_date: updatedstart_date,
      end_date: updatedend_date 
    });
    axios
      .put(`https://eventappbe.herokuapp.com/events/${currentEventId}`, {
        ...selectedEvent,
        start_date: updatedstart_date,
        end_date: updatedend_date
      })
      .then((res) => res.data);
    history.push("/");
  };

  const [dateState, setDateState] = useState([new Date(), new Date()]);
  const changeDate = (e) => {
    setDateState(e);
    console.log(dateState);
  };

  const updatedstart_date = moment(dateState[0]).format("MM/DD/YY");
  const updatedend_date = moment(dateState[1]).format("MM/DD/YY");

  if (!selectedEvent || !selectedEvent.id) {
    return <div>Invalid Event ID.</div>;
  }

  return (
    <React.Fragment>
      <Box className='addEvntContainer'>
        <form onSubmit={onSubmit}>
          <Box>
            <label htmlFor="title">Name of Event: </label>
            <Input
              value={selectedEvent.title}
              onChange={(e) =>
                setSelectedEvent({ ...selectedEvent, title: e.target.value })
              }
              type="text"
              placeholder="Enter title"
            />
          </Box><br/>
          <Box>
            <label htmlFor="description">Description: </label>
            <Input
              value={selectedEvent.description}
              onChange={(e) =>
                setSelectedEvent({
                  ...selectedEvent,
                  description: e.target.value
                })
              }
              type="text"
              placeholder="Enter description"
            />
          </Box><br/>
          <Box>
            <Calendar
              minDate={today}
              selectRange
              defaultValue={[
                new Date(selectedEvent.start_date),
                new Date(selectedEvent.end_date)
              ]}
              onChange={changeDate}
            />
          </Box><br/>
          <Box>
            <button>Edit Event</button>
          </Box><br/>
          <Box>
            <Link to="/">Cancel</Link>
          </Box>
        </form>
      </Box>
    </React.Fragment>
  );
};
