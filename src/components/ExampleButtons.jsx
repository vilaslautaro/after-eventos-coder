import { Button, Center } from '@chakra-ui/react';

export const ExampleButtons = () => {
  const parentElementEvent = event => {
    event.stopPropagation();
    alert('parentElementEvent executed');
  };

  const firstEvent = e => {
    e.stopPropagation();
    alert('firstEvent executed');
  };

  const secondEvent = e => {
    e.stopPropagation();
    alert('secondEvent executed');
  };

  const thirdEvent = e => {
    e.stopPropagation();
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
      <Button onClick={e => secondEvent(e)} bg="green">
        Second Event
      </Button>
      <Button onClick={e => thirdEvent(e)} bg="black">
        Third Event
      </Button>
    </Center>
  );
};
