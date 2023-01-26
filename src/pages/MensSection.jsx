import { Badge, Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Nav from "../Components/Navbar";
import SimpleSidebar from "../Components/sideBar";
import axios from "axios";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import LargeWithNewsletter from "../Components/Footer";
import { Skeleton, Stack, SkeletonCircle, SkeletonText } from '@chakra-ui/react'


export default function MensSection () {

  const [menProducts,setMenProducts] = useState([]);
  const [loading,setLoading] = useState(false)
  
  const getData = () => { 
   return axios.get(`https://brandstore.onrender.com/mensproduct`);
   }
  const loaderArr = [1,2,3,4,5,6,7,8]

  useEffect(()=>{
    setLoading(true);
    getData().then((data)=>{
      setMenProducts(data.data);
      setLoading(false)
    }).catch((err)=>console.log(err));
  },[])

return loading?(
  
  <>
   <Nav/>
   <Flex>
     <Box  w={["0%","0%","17%"]} height="auto" >
      <SimpleSidebar setLoading={setLoading}/>
     </Box>
     <Box marginTop={["60px","60px","40px"]} pl={["10px","30px","30px"]} pr={["10px","30px","30px"]}>
     <Text marginBottom={"30px"} fontSize={"3xl"} fontWeight="500"> Men's Shoes</Text>  
     <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={3}>
        {
          loaderArr.map((item)=>{
            return <GridItem key={item}>
              <Box height={"350px"} width="260px" maxW='sm' borderWidth='1px' overflow='hidden' >
              <Skeleton height='350px' />
              </Box>
            </GridItem>
          })
        }
     </Grid>
     </Box>
   </Flex>
 
   
   </>

) :(
   <>
  <Nav/>
  <Flex>
      <Box w={["0%","0%","17%"]} height="auto" >
         <SimpleSidebar menProducts={menProducts} setMenProducts={setMenProducts} setLoading={setLoading}/>
      </Box>
      <Box marginTop={["60px","60px","40px"]} pl={["10px","30px","30px"]} pr={["10px","30px","30px"]}> 
      <Text marginBottom={"30px"} fontSize={"3xl"} fontWeight="500"> Men's Shoes</Text>      
       <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']} gap={3}>
        {
          menProducts?.map((item)=>{
            return (
      <GridItem key={item.id}>
      <Link to={`/mensproduct/${item.id}`}>
      <Box maxW='sm' borderWidth='1px' overflow='hidden' className="boxContent">
      <Image height={"230px"} width="100%" src={item.image1} alt={item.title} />

      <Box p='3'>
        <Box alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme="blue">
            {item.color} colors
          </Badge>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
        >
          {item.title}
        </Box>

        <Box fontSize={"13px"}>
        <Box as='span' color='gray.600' >
           $
          </Box>
          {item.price}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < item.rating ? 'black.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
           ({item.ratingcount})
          </Box>
        </Box>
      </Box>
    </Box>
 </Link>
  </GridItem>
            )
          })
        }
      </Grid>
      </Box>  
   </Flex>
 {/* <Box width={"70%"} alignItems="flex-end">
 <LargeWithNewsletter/>
 </Box> */}

        </>
    )
}
