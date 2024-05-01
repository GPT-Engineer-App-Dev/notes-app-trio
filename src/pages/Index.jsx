import { Box, Text } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box p={5}>
      <Text fontSize="3xl" mb={4}>Welcome to the Notes App</Text>
      <Text fontSize="xl">Navigate using the menu to create, view, or favorite notes.</Text>
    </Box>
  );
};

export default Index;