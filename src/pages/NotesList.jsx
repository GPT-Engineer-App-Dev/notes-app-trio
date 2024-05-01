import { useEffect, useState } from 'react';
import { Box, Button, Text, VStack, IconButton } from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const toggleFavorite = (id) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, favorite: !note.favorite };
      }
      return note;
    });
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl">All Notes</Text>
      {notes.map(note => (
        <Box key={note.id} p={3} shadow="md" borderWidth="1px">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>{note.text}</Text>
            <IconButton
              icon={note.favorite ? <FaStar /> : <FaRegStar />}
              onClick={() => toggleFavorite(note.id)}
              aria-label="Toggle Favorite"
            />
          </Flex>
        </Box>
      ))}
    </VStack>
  );
};

export default NotesList;