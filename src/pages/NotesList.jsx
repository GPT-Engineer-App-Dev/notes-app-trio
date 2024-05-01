import { useEffect, useState } from 'react';
import { Box, Button, Text, VStack } from '@chakra-ui/react';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl">All Notes</Text>
      {notes.map(note => (
        <Box key={note.id} p={3} shadow="md" borderWidth="1px">
          <Text>{note.text}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default NotesList;