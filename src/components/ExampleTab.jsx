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

  const nameUserIs = () => {
    console.log('Nombre del usuario');
  };

  const progressOfUser = () => {
    console.log('progreso del usuario');
  };

  const changeBgTable = () => {
    console.log("change color table")
    setBgBlue(!bgBlue);
  };

  return (
    <TableContainer onClick={() => console.log("ingrese en la tabla")}>
      <Table variant="striped" onClick={changeBgTable} bg={bgBlue ? "blue" :"#000"} cursor="pointer">
        <Thead>
          <Tr>
            <Th>Usuario</Th>
            <Th>Curso</Th>
            <Th isNumeric>Progreso</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr onClick={nameUserIs} cursor="pointer" _hover={{ color: 'green' }} >
            <Td>Jose</Td>
            <Td>React</Td>
            <Td isNumeric onClick={progressOfUser} _hover={{ color: 'red' }}>
              80%
            </Td>
          </Tr>
          <Tr onClick={nameUserIs} cursor="pointer" _hover={{ color: 'green' }}>
            <Td>Eliana</Td>
            <Td>React</Td>
            <Td isNumeric onClick={progressOfUser} _hover={{ color: 'red' }}>
              90%
            </Td>
          </Tr>
          <Tr onClick={nameUserIs} cursor="pointer" _hover={{ color: 'green' }}>
            <Td>Facundo</Td>
            <Td>React</Td>
            <Td isNumeric onClick={progressOfUser} _hover={{ color: 'red' }}>
              85%
            </Td>
          </Tr>
          <Tr onClick={nameUserIs} cursor="pointer" _hover={{ color: 'green' }}>
            <Td>Clara</Td>
            <Td>React</Td>
            <Td isNumeric onClick={progressOfUser} _hover={{ color: 'red' }}>
              87%
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ExampleTab;
