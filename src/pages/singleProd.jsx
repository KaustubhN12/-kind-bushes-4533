import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Alert,
    AlertIcon,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
import LargeWithNewsletter from '../Components/Footer';
import Nav from '../Components/Navbar';
import { useState,useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { CartContext } from '../Context/cartcontext';
import { useToast } from '@chakra-ui/react'
  
  export default function SinglePoduct() {

    const {cartItem,setcartItem} = useContext(CartContext);
    const [data ,setData] = useState([]);
    const toast = useToast();
    let params = useParams();
    // console.log(params)
    const getSingleprod = () => {
      axios.get(`https://brandstore.onrender.com/mensproduct/${params.prod_id}`).then((data)=>setData(data.data)).catch((err)=>console.log(err))
    }
    useEffect(()=>{
       getSingleprod()
    },[])

    const handleAddToCart = () => {
        setcartItem([...cartItem,data]);
        toast({
          title: 'Item Added to Cart',
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
    }
    return (
        <>
        <Nav/>
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 19 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={data.image1 }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {data.title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${data.price}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                 Experience a throwback style revamped with revolutionary Nike Air when you slip into the Men’s Nike Air VaporMax Plus Running Shoes.
                </Text>
                <Text fontSize={'lg'}>
                Over seven years in the making, the Nike Air VaporMax Plus Running Shoes are a transcendent revolution. This sleek hybrid sneaker not only brings the comfort you crave, the unique style makes them a standout, wearable style for everyday use. A snug, foot-hugging bootie construction provides the stability you want, while iconic VaporMax cushioning enhances that springy bounce you can feel with every step.
                </Text>
              </VStack>
              {/* <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Chronograph</ListItem>
                    <ListItem>Master Chronometer Certified</ListItem>{' '}
                    <ListItem>Tachymeter</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Anti‑magnetic</ListItem>
                    <ListItem>Chronometer</ListItem>
                    <ListItem>Small seconds</ListItem>
                  </List>
                </SimpleGrid>
              </Box> */}
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('blue.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      ●
                    </Text>{' '}
                    Compression-molded upper for enhanced durability
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    ●
                    </Text>{' '}
                    Bootie construction provides a snug and secure fit
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    ●
                    </Text>{' '}
                    Floating, molded TPU cage is a direct callback to the original 1998 design
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    ●
                    </Text>{' '}
                    Revolutionary VaporMax Air sole for soft, lightweight responsiveness
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    ●
                    </Text>{' '}
                    Durable rubber outsole
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    ●
                    </Text>{' '}
                    Rubber pods on the outsole in high-wear areas for enhanced durability
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    ●
                    </Text>{' '}
                    Integrated lugs provide aggressive traction
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              onClick={handleAddToCart}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <LargeWithNewsletter/>
      </>
    );
  }