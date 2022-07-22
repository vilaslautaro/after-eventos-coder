import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useState } from 'react';

const ExampleTab = () => {
  const [bgBlue, setBgBlue] = useState(false);

  const nameUserIs = (e, name) => {
    e.stopPropagation();
    console.log(name);
  };

  const progressOfUser = (e, progress) => {
    e.stopPropagation();
    console.log(progress);
  };

  const changeBgTable = e => {
    e.stopPropagation();
    setBgBlue(!bgBlue);
    console.log('change bgtable');
  };

  return (
    <TableContainer onClick={() => console.log('ingrese en la tabla')}>
      <Table
        variant="striped"
        onClick={changeBgTable}
        bg={bgBlue ? 'blue' : '#000'}
        cursor="pointer"
      >
        <Thead>
          <Tr>
            <Th>Usuario</Th>
            <Th>Curso</Th>
            <Th isNumeric>Progreso</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr onClick={(e) => nameUserIs(e, "Jose")} cursor="pointer" _hover={{ color: 'green' }}>
            <Td>Jose</Td>
            <Td>React</Td>
            <Td isNumeric onClick={(e) => progressOfUser(e, "80%")} _hover={{ color: 'red' }}>
              80%
            </Td>
          </Tr>
          <Tr onClick={(e) => nameUserIs(e, "Eliana")} cursor="pointer" _hover={{ color: 'green' }}>
            <Td>Eliana</Td>
            <Td>React</Td>
            <Td isNumeric onClick={(e) => progressOfUser(e, "90%")} _hover={{ color: 'red' }}>
              90%
            </Td>
          </Tr>
          <Tr onClick={(e) => nameUserIs(e, "Facundo")} cursor="pointer" _hover={{ color: 'green' }}>
            <Td>Facundo</Td>
            <Td>React</Td>
            <Td isNumeric onClick={(e) => progressOfUser(e, "85%")} _hover={{ color: 'red' }}>
              85%
            </Td>
          </Tr>
          <Tr onClick={(e) => nameUserIs(e, "Clara")} cursor="pointer" _hover={{ color: 'green' }}>
            <Td>Clara</Td>
            <Td>React</Td>
            <Td isNumeric onClick={(e) => progressOfUser(e, "87%")} _hover={{ color: 'red' }}>
              87%
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ExampleTab;
