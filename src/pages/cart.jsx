import Nav from "../Components/Navbar";
import { CartContext } from "../Context/cartcontext";
import { useContext } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LargeWithNewsletter from "../Components/Footer";
import { DeleteIcon } from "@chakra-ui/icons";
import { Scrollbars } from 'react-custom-scrollbars-2';

export default function Cart () {

    const {cartItem,setcartItem} = useContext(CartContext);

    // const handleDelete = (id) => {

    // }
  console.log(cartItem)
    if(cartItem.length==0){
        return(
            <>
            <Nav/>
            <Box width={["100%","100%","50%"]} margin="auto">
            <Image w={"100%"} src="https://bakestudio.in/assets/images/cart/empty-cart.gif"/>
            </Box>
            <Box margin={"auto"} width={["160px","90px","90px"]} marginTop="20px">
            <Link to="/">
                <Button>
                Continue Shopping
                </Button>
            </Link>
            </Box>
            <LargeWithNewsletter/>
            </>
        )
    }

        return (
            <>
            <Nav/>
            <Box display={"flex"} width="80%" margin="auto" style={{}}>
            <Box width={"65%"}  >
            <Scrollbars style={{ height: 500 }}>
            <Text fontSize={"2xl"} fontWeight="700" marginTop={"30px"}marginBottom={"30px"}>YOUR BAG</Text>

             {
                cartItem.map((item)=>{
                    return (
                      <>
                      <hr/>
                      <Box display={"flex"} py="20px" paddingRight={"10px"}paddingLeft={"20px"} justifyContent="space-evenly" alignItems={"center"} >
                      <Box  width={"20%"}>
                        <Image src={item.image1}/>
                      </Box>
                      <Box width={"180px"}>
                         <Text fontWeight={"550"}>{item.title}</Text>
                         <Text>Size: 8.0</Text>
                         <Text>Free Shipping</Text>
                      </Box>
                      <Box>
                         <Button>-</Button>
                         <Button>1</Button>
                         <Button>+</Button>
                      </Box>
                      <Box>
                        <Text>{item.price}</Text>
                      </Box>
                      <Button onClick={(id)=>{
                      let deletedData = cartItem.filter((el)=> el.id!=item.id)
                      setcartItem(deletedData)
                      }}>
                        <DeleteIcon/>
                      </Button>
                      </Box>
                      <hr/>
                      </>
                    )
                })
             }
              </Scrollbars>
            </Box>
            
            <Box>
             {/* ghgfhf */}
            </Box>
            </Box>

            <LargeWithNewsletter/>
            </>
        )
    
    }

 

