import { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';

import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Text,
} from '@chakra-ui/react';

import { FiEye, FiUserCheck, FiUnlock } from 'react-icons/fi';

export function Login() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const handlePasswordToggle = () => setPasswordVisible(!passwordVisible);

  return (
    <Flex
      w='40%'
      h='50%'
      direction='column'
      align='center'>
      <Heading
        textAlign='center'
        fontSize='35'
        mb={10}>
        Welcome back!
      </Heading>
      <FormControl
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        h='100%'>
        <FormLabel>Email address</FormLabel>
        <InputGroup w='300px'>
          <InputLeftElement children={<FiUserCheck />} />
          <Input
            tabIndex={1}
            type='email'
            mb='10'
          />
        </InputGroup>
        <FormLabel>Password</FormLabel>
        <InputGroup w='300px'>
          <InputLeftElement children={<FiUnlock />} />
          <Input
            tabIndex={2}
            type={passwordVisible ? 'text' : 'password'}
            mb='-1'
          />
          <InputRightElement>
            <IconButton
              onClick={handlePasswordToggle}
              tabIndex={4}
              aria-label='Show password.'
              icon={<FiEye />}
              bg='transparent'></IconButton>
          </InputRightElement>
        </InputGroup>
        <FormHelperText mb='10'>
          <Link
            as={ReachLink}
            tabIndex={5}
            to='/forgotpassword'
            color='#00FFFF'>
            Forgot password?
          </Link>
        </FormHelperText>
        <Button
          tabIndex={3}
          type='submit'>
          Login
        </Button>
      </FormControl>
      <Flex
        w='100vw'
        mt={10}
        justify='center'
        alignItems='center'>
        <Text>Don't have an account?</Text>
        <Link
          as={ReachLink}
          tabIndex={6}
          to='/register'
          ml='1'>
          <Text color='#00FFFF'>Sign Up</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
