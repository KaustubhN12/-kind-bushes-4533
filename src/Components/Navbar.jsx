import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Input,
    Image,
    Badge
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    SearchIcon,
  } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  // import {Link as RouterLink} from "react-router-dom"
  import navStyles from './navbar.module.css';
import { FaPersonBooth, FaPhoenixSquadron, FaSearchLocation } from 'react-icons/fa';
import { BiCart, BiCategory, BiLocationPlus } from 'react-icons/bi';
import { CartContext } from "../Context/cartcontext";
import { useContext } from "react";

export default function Nav () {
    const { isOpen, onToggle } = useDisclosure();
    const {cartItem} = useContext(CartContext);
    return(
      <div className={navStyles.mobileNav}>
        <Box >
          <Box display={"flex"} flexDirection={["column","column","row"]} alignItems="center"  bgColor={"white"}   >
           <Box>
            <Link to={"/"}>
           <Image
              width={["300px","400px","170px"]}
              marginLeft={["30px","50px","25px"]}
              marginRight="380px"
              src='https://i.ibb.co/k4XjPHX/Minimalist-Simple-Brand-Initial-Logo-final.png' alt='Dan Abramov' /></Link>
           </Box>
           <Box border={"1px solid gray"} paddingBottom="5px" paddingLeft="10px">
            <Box as='span' fontSize={"24px"} color="gray.300">
              <SearchIcon/>
            </Box>
            <Input paddingLeft="10px" variant='unstyled' width={["auto","auto","400px"]} border="none" placeholder='Search' />
           </Box>
           <Box display={"flex"} border={"1px solid gray"} py="9px" paddingLeft={["48px","48px","5px"]} paddingRight={["48px","48px","5px"]} >
           <Box as='span' fontSize={"24px"} color="gray.300">
              <BiLocationPlus/>
            </Box>
            <Box>Choose a Store</Box>
            </Box>
            <Box display={"flex"} border={"1px solid gray"} py="9px" paddingLeft={["72px","72px","5px"]} paddingRight={["72px","72px","5px"]} >
           <Box as='span' fontSize={"24px"} color="gray.300">
              <FaPhoenixSquadron/>
            </Box>
            <Box>Account</Box>
            </Box>
            <Box display={"flex"} border={"1px solid gray"} py="9px" paddingLeft={["88px","88px","5px"]} paddingRight={["88px","88px","5px"]} >
           <Box as='span' fontSize={"24px"} color="gray.300">
              <BiCart/>
            </Box>
            <Link to="/cart">
            <Box>Bag<Badge position={["static","static","absolute"]} marginTop={["","","-17px"]} marginLeft={["","","-10px"]} borderRadius='full' px='2' colorScheme="blue">
             {cartItem.length==0?"":cartItem.length}
          </Badge></Box>
            </Link>
            </Box>
          </Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'auto'}
          // position={"static"}
          py={{ base:0 }}
          px={{ base:4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
            {/* <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
            </Text> */}
             {/* <Image
              width={"170px"}
              src='https://i.ibb.co/k4XjPHX/Minimalist-Simple-Brand-Initial-Logo-final.png' alt='Dan Abramov' /> */}
               
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} paddingBottom="14px" fontSize={"14px"} >
              <DesktopNav />
              {/* <Link to ='/menssection'>mensfudhf</Link> */}
            </Flex>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
        {/* lower-section */}
        <Box w={"100%"} h="auto" backgroundColor={"#333333"} p="10px" fontSize={"12px"} 
    textAlign="center" fontWeight={500}>
      <Text color={"white"}>BOOST YOUR STATUS </Text>
      <Text color={"white"}>Stay in the loop for releases,shipping promotion, and more</Text>
      <Link> <Text color={"white"} textDecoration="underline">Join for Free or Sign In</Text></Link>
    </Box>
      </Box>
       </div>
    )
}

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={10} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.href ?? '#'}
                  fontSize={'sm'}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  
  const NAV_ITEMS = [
    {
      label: 'NEW ARRIVALS',
      children: [
        {
          label: 'Shoes',
          subLabel: 'Trending Design to inspire you',
          href: '/menssection',
        }
      ]
    },
    {
      label: 'MEN',
      children: [
        {
          label: 'Shoes',
          subLabel: 'Trending Styles',
          href: '/menssection',
        },
        {
          label: 'Clothing',
          subLabel: 'All White Styles',
          href: '/menssection',
        },
        {
          label: 'Brands',
          subLabel: 'Trending Now',
          href: '/menssection',
        },
        {
          label: 'Recent Releases',
          href: '/menssection',
        },      
      ]
    },
    {
      label: 'WOMEN',
      children: [
        {
          label: 'Shoes',
          subLabel: 'Trending Styles',
          href: '/menssection',
        },
        {
          label: 'Clothing',
          subLabel: 'All White Styles',
          href: '/menssection',
        },
        {
          label: 'Brands',
          subLabel: 'Trending Now',
          href: '/menssection',
        },
        {
          label: 'Recent Releases',
          href: '/menssection',
        }, 
      ],
    },
    {
      label: 'BOYS',
      children: [
        {
          label: 'Shoes',
          subLabel: 'Trending Styles',
          href: '/menssection',
        },
        {
          label: 'Clothing',
          subLabel: 'All White Styles',
          href: '/menssection',
        },
        {
          label: 'Brands',
          subLabel: 'Trending Now',
          href: '/menssection',
        },
        {
          label: 'Recent Releases',
          href: '/menssection',
        }, 
      ],
    },
    {
      label: 'GIRLS',
      children: [
        {
          label: 'Shoes',
          subLabel: 'Trending Styles',
          href: '/menssection',
        },
        {
          label: 'Clothing',
          subLabel: 'All White Styles',
          href: '/menssection',
        },
        {
          label: 'Brands',
          subLabel: 'Trending Now',
          href: '/menssection',
        },
        {
          label: 'Recent Releases',
          href: '/menssection',
        }, 
      ],
    },
    {
      label: 'CLOTHING',
      children: [
        {
          label: "Men's Clothing",
          subLabel: 'Trending Styles',
          href: '/menssection',
        },
        {
          label: "Women's Clothing",
          subLabel: 'All White Styles',
          href: '/menssection',
        },
        {
          label: "Girl's Clothing",
          subLabel: 'Trending Now',
          href: '/menssection',
        },
        {
          label:  "Boy's Clothing",
          subLabel: 'Trending Now',
          href: '/menssection',
        }, 
      ],
    },
    {
      label: 'ACCESSARIES',
      children: [
        {
          label: "Men's Accessories",
          href: '/menssection',
        },
        {
          label: "Women's Accessories",
          href: '/menssection',
        },
        {
          label: "Girl's Accessories",
          href: '/menssection',
        },
        {
          label:  "Boy's Accessories",
          href: '/menssection',
        },
      ],
    },
    {
      label: 'SALE',
      children: [
        {
          label: "Mens",
          href: '/menssection',
        },
        {
          label: "Womens",
          href: '/menssection',
        },
        {
          label: "Girls",
          href: '/menssection',
        },
        {
          label:  "Boys",
          href: '/menssection',
        },
        {
          label:  "Hot Deals",
          href: '/menssection',
        }
      ],
    },
    {
      label: 'BRAND',
      children: [
        {
          label: 'Nike',
          href: '#',
        },
        {
          label: 'Adidas',
          href: '#',
        },
        {
          label: 'Puma',
          href: '#',
        },
        {
          label: 'Crocs',
          href: '#',
        },
        {
          label: 'Reebok',
          href: '#',
        },
        {
          label: 'Vans',
          href: '#',
        },
      ],
    },
    {
      label: 'RELEASE',
      href: '#',
    },
  ];