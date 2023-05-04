import React from 'react'
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";
import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import Login from '../components/Authentication/Login.js'
import Signup from '../components/Authentication/Signup.js'
function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
  <Flex minHeight='100vh' width='full' align='center' justifyContent='center'>
        <Box 
        borderColor='#112343'
        borderWidth={1}
        px={4}
        width='full'
        maxWidth='500px'
        borderRadius={4}
        textAlign='center'
          boxShadow='0 8px 46px 0 '
          backgroundColor='black'
zIndex='0'

      >
          <Text fontSize="4xl" fontFamily="Work sans" color='#678f9f'>
          Word Saving
        </Text>
        <Box p={4}>
                 <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box>
      </Box>
    </Flex>
    </Container>
  );
}

export default Homepage;