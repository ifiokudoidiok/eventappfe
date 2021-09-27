import React, { useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { GlobalContext } from "../context/GlobalState";

export const EventList = () => {
  const { events, removeEvent } = useContext(GlobalContext);

  return (
    <React.Fragment>
      {events ? (
        <React.Fragment>
          {events.map((event) => (
            <div key={event.id}>
              <div>
                <p>{event.title}</p>
                <p>{event.description}</p>
                <p>{event.start_date}</p>
                <p>{event.end_date}</p>
              </div>
              <div>
                <Link to={`/edit/${event.id}`} title="Edit Event">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </div>
                </Link>
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://eventappbe.herokuapp.com/events/${event.id}`
                      )
                      .then((res) => {
                        console.log(res);
                        console.log(res.data);
                      });
                    removeEvent(event.id);
                  }}
                  title="Remove Event"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </React.Fragment>
      ) : (
        <p>No Event Created.</p>
      )}
    </React.Fragment>
  );
};