import { useState } from 'react';
import { ExampleButtons } from './components/ExampleButtons';
import ExampleTab from './components/ExampleTab';
/* import { ExampleForm } from './components/ExampleForm';
import ExampleErrors from './components/ExampleErrors'; */
import { Box, Button, Center, Grid } from '@chakra-ui/react';

function App() {
  const [showTable, setShowTable] = useState(false);
/*   const arrayNumbers = [1, 2, 3, 4, 5]; */

  return (
    <Box flexDirection="column" w="100%">
      <Center mt={50} flexDirection="column">
        <Button onClick={() => setShowTable(!showTable)}>Change Example</Button>
      </Center>
      <Box textAlign="center" fontSize="xl" bg="#000">
        <Grid minH="50vh" p={3} mt={'30vh'}>
          {showTable ? <ExampleTab /> : <ExampleButtons />}
          {/* <ExampleForm  /> */}
          {/*   <ExampleErrors numbers={arrayNumbers} /> */}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
