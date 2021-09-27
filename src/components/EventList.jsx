import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Box, Text, Icon, Button } from "@chakra-ui/react"
import { MdDeleteForever, MdEdit } from "react-icons/md"

import axios from "axios";

import { GlobalContext } from "../context/GlobalState";

export const EventList = () => {
  const { events, removeEvent } = useContext(GlobalContext);

  return (
    <React.Fragment>
      {events ? (
        <React.Fragment>
          {events.map((event) => (
            <Box key={event.id} className='cardContainer'>
              <Box className='eventText'>
                <Text className='titleText'>{event.title}</Text>
                <Text><b>Description:</b> {event.description}</Text>
                <Text><b>Start:</b> {event.start_date}</Text>
                <Text><b>End:</b> {event.end_date}</Text>
              </Box>
              <Box className='eventIcons'>
                <Link to={`/edit/${event.id}`} title="Edit Event">
                  <Box>
                    <Icon color='black'
                     as={MdEdit}
                    >
                    
                    </Icon>
                  </Box>
                </Link>
                <Button
                  onClick={() => {
                    axios
                      .delete(
                        `https://eventappbe.herokuapp.com/events/${event.id}`
                      )
                      .then((res) => {
                        console.log(res.data);
                      });
                    removeEvent(event.id);
                  }}
                  title="Remove Event"
                >
                  <Icon w={20} h={20}
                    as={MdDeleteForever}
                  >
                    
                  </Icon>
                </Button>
              </Box>
            </Box>
          ))}
        </React.Fragment>
      ) : (
        <Text>No Event Created.</Text>
      )}
    </React.Fragment>
  );
};
