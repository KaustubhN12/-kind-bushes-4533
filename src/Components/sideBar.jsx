import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Button,
  Image,
  Grid,
  GridItem
} from '@chakra-ui/react';
import {
  FiHome,
  FiMenu,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LinkItems = [
  { name: 'Home', icon: FiHome }
];

export default function SimpleSidebar({ children,menProducts,setMenProducts,setLoading}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH={["0px","100vh","100vh"]} bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        menProducts={menProducts} 
        setMenProducts={setMenProducts}
        setLoading={setLoading}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent menProducts={menProducts} setMenProducts={setMenProducts} setLoading={setLoading} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>

    </Box>
  );
}


const SidebarContent = ({menProducts,setMenProducts,setLoading, onClose,...rest }) => {

  const getData = (filter) => {
    axios.get(`https://brandstore.onrender.com/mensproduct?brand=${filter}`).then((data)=>setMenProducts(data.data)).catch((err)=>console.log(err));
   }
  const handleAsc = () => {
    setMenProducts(menProducts);
    let Ascdata= menProducts.sort((a,b)=>a.price-b.price);
    setMenProducts([...Ascdata]);
   }
   const handleDesc = () => {
    setMenProducts(menProducts);
    let Descdata= menProducts.sort((a,b)=>b.price-a.price);
    setMenProducts([...Descdata]);
   }
   const handleAdidas = () => {
     getData("Adidas")
   }
   const handleNike = () => {
    getData("Nike")
   }
   const handleCrocs = () => {
    getData("Crocs")
   }
   const handlePuma = () => {
    getData("Puma")
   }
   const handleVans = () => {
    getData("Vans")
   }
   const handleReebok = () => {
    getData("Reebok")
   }
   const handleReset = () => {
    axios.get(`https://brandstore.onrender.com/mensproduct`).then((data)=>setMenProducts(data.data)).catch((err)=>console.log(err)); 
   }

  
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
     
        <NavItem icon={FiHome}>
        <Link to={"/"}>Home</Link>
        </NavItem>
        <Box marginTop={"30px"} marginLeft={"20px"}>
       <Button marginBottom={"10px"} onClick={handleAsc} >Price: low to high</Button>
       <Button marginBottom={"10px"} onClick={handleDesc}>Price: high to low</Button>
       </Box>
       <Box>
         <Text marginLeft={"20px"} marginBottom="10px" fontSize="xl" fontWeight={"550"}>Brands</Text>
       </Box>
       <Grid marginLeft="20px" marginRight="20px" templateColumns='repeat(3, 1fr)' gap={2}>
         <GridItem onClick={handleNike} padding={"8px"} border={"1px solid gray"} borderRadius="6px">
          <Image src="https://i.ibb.co/K0yqCzs/nike.png"/>
          <Text fontSize={"xs"} fontWeight={"600"}>Nike</Text>
         </GridItem>
         <GridItem onClick={handleAdidas} padding={"8px"} border={"1px solid gray"} borderRadius="6px">
          <Image src="https://i.ibb.co/J29Ds3N/adidas.png"/>
          <Text fontSize={"xs"} fontWeight={"600"}>Adidas</Text>
         </GridItem>
         <GridItem onClick={handlePuma} padding={"8px"} border={"1px solid gray"} borderRadius="6px">
          <Image width={"85%"} src="https://i.ibb.co/6NpvN8Y/icons8-puma-a-german-multinational-company-designs-and-manufactures-athletic-and-casual-footwear-app.png"/>
          <Text fontWeight={"600"} fontSize={"xs"} >PUMA</Text>
         </GridItem>
         <GridItem onClick={handleCrocs}  padding={"8px"} border={"1px solid gray"} borderRadius="6px">
          <Image width={"80%"} src="https://i.ibb.co/1dT2WRS/crocs.png"/>
          <Text fontSize={"xs"} fontWeight={"600"}>Crocs</Text>
         </GridItem>
         <GridItem onClick={handleReebok}  padding={"8px"} border={"1px solid gray"} borderRadius="6px">
          <Image width={"80%"} src="https://i.ibb.co/2n9Y71g/icons8-reebok-an-english-footwear-and-apparel-company-produces-and-distributes-sportswear-clothing-a.png"/>
          <Text fontSize={"xs"} fontWeight={"600"}>Reebok</Text>
         </GridItem>
         <GridItem onClick={handleVans}  padding={"8px"} border={"1px solid gray"} borderRadius="6px">
          <Image width={"80%"} src="https://i.ibb.co/d7PZP5z/icons8-vans-an-american-manufacturer-of-skateboarding-shoes-96.png"/>
          <Text fontSize={"xs"} fontWeight={"600"}>Vans</Text>
         </GridItem>
      </Grid>
      <Button marginLeft={"20px"} marginTop="10px" onClick={handleReset}>Reset All</Button>
    </Box>
  );
};


const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen,...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text> */}
    </Flex>
  );
};