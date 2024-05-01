import { useState } from 'react';
import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';

const CreateNote = () => {
  const [note, setNote] = useState('');

  const handleNoteChange = (event) => setNote(event.target.value);

  const saveNote = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = { id: Date.now(), text: note, favorite: false };
    localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
    setNote('');
  };

  return (
    <VStack spacing={4} p={5}>
      <Text fontSize="2xl">Create a New Note</Text>
      <Input
        placeholder="Type your note here..."
        value={note}
        onChange={handleNoteChange}
      />
      <Button colorScheme="blue" onClick={saveNote}>Save Note</Button>
    </VStack>
  );
};

export default CreateNote;