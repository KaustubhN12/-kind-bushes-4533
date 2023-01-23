import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import { useNavigate } from "react-router-dom";
  import { useToast } from '@chakra-ui/react'
  export default function Signin() {
    const toast = useToast();
    const navigate = useNavigate();
    const handlelogin = () => {
     setTimeout(() => {
      toast({
        title: 'logged in successfully',
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
     navigate("/")
     }, 1000);
    }

    return (
        <>
       <Box width={"30%"} margin="auto">
        <Image src="https://i.ibb.co/k4XjPHX/Minimalist-Simple-Brand-Initial-Logo-final.png"/>
       </Box>
      <Flex
        // minH={'100vh'}
        // minH={'auto'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={handlelogin}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
               
              </Stack>
              <Text>Not an existing User ? <Link to="/register" textDecoration={"underline"}>Register here</Link></Text>
            </Stack>    
          </Box>
        </Stack>
      </Flex>
      </>
    );
  }