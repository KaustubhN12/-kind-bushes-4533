import Nav from "../Components/Navbar";
import { CartContext } from "../Context/cartcontext";
import { useContext } from "react";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LargeWithNewsletter from "../Components/Footer";


export default function Cart () {

    const {cartItem,setcartItem} = useContext(CartContext);

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
            </>
        )
    
    }

 

