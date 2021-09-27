import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import moment from "moment";

import axios from "axios";

import "react-calendar/dist/Calendar.css";

import { GlobalContext } from "../context/GlobalState";

export const AddEvent = () => {
  const [dates, setDates] = useState([new Date(), new Date()]);
  let history = useHistory();

  const { addEvent, events } = useContext(GlobalContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Change Date Method
  const changeDate = (e) => {
    setDates(e);
  };

  const today = new Date();
  const selectedstart_date = moment(dates[0]).format("MM/DD/YY");
  const selectedend_date = moment(dates[1]).format("MM/DD/YY");

  const onSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      // id: events.length + 1,
      title,
      description,
      start_date: selectedstart_date,
      end_date: selectedend_date
    };
    console.log(newEvent);
    addEvent(newEvent);
    axios
      .post("https://eventappbe.herokuapp.com/events", newEvent)
      .then(res => console.log(res))
      .catch(err => console.log(err));

    
    history.push("/");
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="title">Title of Event:</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter title"
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Enter Description"
            />
          </div>
          <div>
            <label>Set Dates</label>
            <Calendar
              minDate={today}
              selectRange
              value={dates}
              onChange={changeDate}
            />
          </div>
          <div>
            <button>Add Event</button>
          </div>
          <div>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
