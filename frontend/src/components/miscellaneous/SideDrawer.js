import React from "react";
import { ChatState } from "../../Context/Chatprovider";
import ProfileModal from "./ProfileModal";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";

import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";

import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { Avatar } from "@chakra-ui/avatar";

const SideDrawer = () => {

  const {
    user,
  } = ChatState();

  const history = useHistory();
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

 
  


  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
        borderRadius="5px"
      >
        <Text fontSize="2xl" fontFamily="Work sans">
          The Saving World
        </Text>
        <div>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" name={user.name} />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem color="black">My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem color="black" onClick={logoutHandler}>
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
