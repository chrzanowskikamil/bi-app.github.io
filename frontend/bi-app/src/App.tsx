import { Flex } from '@chakra-ui/react';
import { Login } from './components/Login';

export function App() {
  return (
    <Flex
      h='100vh'
      align='center'
      justify='center'>
      <Login />
    </Flex>
  );
}
