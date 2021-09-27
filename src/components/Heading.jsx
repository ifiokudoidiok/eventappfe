import React from "react";
import { Link } from "react-router-dom";

import {Box,  Icon, Button } from "@chakra-ui/react"
import { RiPlayListAddLine } from "react-icons/ri"

export const Heading = () => {
  return (
    
        <Box display='flex' flexDirection='row' justifyContent='flex-end' marginRight={45}>
          <Link to="/add">
            <Button>
              <Icon as={RiPlayListAddLine}
                
              >
                
              </Icon>
              &nbsp;&nbsp;Add Event
            </Button>
          </Link>
        </Box>
     
    
  );
};
