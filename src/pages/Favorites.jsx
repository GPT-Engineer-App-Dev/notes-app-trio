import { useEffect, useState } from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const favoriteNotes = allNotes.filter(note => note.favorite);
    setFavorites(favoriteNotes);
  }, []);

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl">Favorite Notes</Text>
      {favorites.map(note => (
        <Box key={note.id} p={3} shadow="md" borderWidth="1px">
          <Text>{note.text}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Favorites;