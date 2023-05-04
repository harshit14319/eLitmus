import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react'
import { ChatState } from '../Context/Chatprovider'
import SideDrawer from '../components/miscellaneous/SideDrawer';
import ChatBox from '../components/ChatBox'
const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        
        {user && (
          <ChatBox/>
        )}
      </Box>
    </div>
  );
};

export default ChatPage