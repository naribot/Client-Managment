import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';

const App: React.FC = () => {
  return (
    <Box p={4}>
      <Flex justify="space-between" align="center">
        <Heading as="h1">Client Management</Heading>
        <ChakraLink as={Link} to="/clients">
          Clients
        </ChakraLink>
      </Flex>
      <Box mt={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
