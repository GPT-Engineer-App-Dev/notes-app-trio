import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import { Box, Flex } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";
import CreateNote from "./pages/CreateNote.jsx";
import NotesList from "./pages/NotesList.jsx";
import Favorites from "./pages/Favorites.jsx";

function App() {
  return (
    <Router>
      <Box p={4}>
        <Flex justifyContent="space-between" mb={4}>
          <Link to="/">Home</Link>
          <Link to="/create">Create Note</Link>
          <Link to="/favorites">Favorites</Link>
        </Flex>
        <Routes>
          <Route exact path="/" element={<NotesList />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;