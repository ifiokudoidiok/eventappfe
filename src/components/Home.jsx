import React from "react";
import { Heading } from "./Heading";
import { EventList } from "./EventList";

export const Home = () => {
  return (
    <React.Fragment>
      <div>
        <h3>Simple Event Planning App</h3>
        <Heading />
        <EventList />
      </div>
    </React.Fragment>
  );
};
