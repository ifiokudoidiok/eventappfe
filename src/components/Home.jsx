import React from "react";
import { Heading } from "./Heading";
import { EventList } from "./EventList";
import {Text} from "@chakra-ui/react"
export const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Text as='h3' fontSize={40} display='flex' marginLeft={13}>Events</Text>
        
        <EventList />
        <Heading />
      </div>
    </React.Fragment>
  );
};
