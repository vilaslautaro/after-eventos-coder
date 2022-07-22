import { Button, Center } from '@chakra-ui/react';

export const ExampleButtons = () => {
  const parentElementEvent = () => {
    alert('parentElementEvent executed');
  };

  const firstEvent = () => {
    alert('firstEvent executed');
  };

  const secondEvent = () => {
    alert('secondEvent executed');
  };

  const thirdEvent = () => {
    alert('thirdEvent executed');
  };

  return (
    <Center
      onClick={parentElementEvent}
      flexDirection="column"
      bg="red.700"
      justifyContent="space-evenly"
    >
      <Button onClick={firstEvent} bg="blue">
        First Event
      </Button>
      <Button onClick={secondEvent} bg="green">
        Second Event
      </Button>
      <Button onClick={thirdEvent} bg="black">
        Third Event
      </Button>
    </Center>
  );
};
