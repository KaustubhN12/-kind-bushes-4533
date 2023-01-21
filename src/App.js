import Nav from "./Components/Navbar";
import CaptionCarousel from "./Components/carousel1";
import LargeWithNewsletter from "./Components/Footer"
import { Box,Link,Text,Image,Grid,GridItem} from "@chakra-ui/react";
import './App.css';
import Recommended from "./Components/recommended";
import Trending from "./Components/trending";

function App() {
  return (
    <>
    {/* upper-secton */}
    <Nav/>
    {/* <Box w={"100%"} h="auto" bg={"black"} p="10px" fontSize={"12px"} 
    textAlign="center" fontWeight={500}>
      <Text color={"white"}>BOOST YOUR STATUS </Text>
      <Text color={"white"}>Stay in the loop for releases,shipping promotion, and more</Text>
      <Link color={"white"} textDecoration="underline">Join for Free or Sign In</Link>
    </Box> */}
   {/* middle-section */}
    <Box w={["100%","80%"]} m="auto" textAlign={"center"}>
    <Image marginBottom={"20px"}  marginTop={"15px"} src="https://jdsports.a.bigcontent.io/v1/static/JD_FNL_011723_Jordan_Flush_Email_Banner_Desktop_1213x300"/>
    <CaptionCarousel/>
    {/* links */}
      <Box marginTop={"20px"}marginBottom={"50px"}>
        <hr/>
         <Box display={"flex"} justifyContent="space-around" width={"70%"} margin="auto" fontSize={"13px"}  padding="23px">
           <Link>Men's Nike Shoes</Link>
           <div class="vl"></div>
           <Link>Men's Basketball</Link>
           <div class="vl"></div>
           <Link>Men's Matching Set</Link>
           <div class="vl"></div>
           <Link>Men's Boot</Link>
           <div class="vl"></div>
           <Link>Men's Socks</Link>
           <div class="vl"></div>
           <Link>Men's adidas NMD</Link>
         </Box>
        <hr/>
      </Box>
     {/* shoes-gird */}
      
      <Text fontWeight={700}>SHOP THE LATEST & GREATEST STYLES</Text>
        <Grid templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={6} marginTop="20px">
           <GridItem>
            <Image src="https://media.finishline.com/i/finishline/DQ8426_060_P1?$Small$"/>
            <Link fontSize={"sm"}>Jordan</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/s/finishline/DN1772_060?$Small$"/>
            <Link fontSize={"sm"}>Basketball</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/s/finishline/U9060ECA_108?$Small$"/>
            <Link fontSize={"sm"}>Casual Shoes</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/s/finishline/HQ4202_100?$Small$"/>
            <Link fontSize={"sm"}>Running</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/s/finishline/DD5016_001?$Small$"/>
            <Link fontSize={"sm"}>Boots</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/s/finishline/NF0A7ZGX_610?$Small$"/>
            <Link fontSize={"sm"}>Matching Sets</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/i/finishline/DV0537_070_M3?$Small$"/>
            <Link fontSize={"sm"}>Best Sellers</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/s/finishline/DX2036_434?$Small$"/>
            <Link fontSize={"sm"}>Outerwear up to 40% off</Link>
           </GridItem>
         </Grid>
       
       {/* brands-carouser */}

       {/* second-grid */}
       <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(3, 1fr)']} gap={6} marginTop="20px" textAlign={"start"} textDecoration="underline"
       fontWeight={550} marginBottom="30px" >
           <GridItem>
            <Image src="https://media.finishline.com/i/finishline/FNL_011022_3Up_Tile_MostFavorited_604x604"/>
            <Link fontSize={"l"}>Most Favorited Styles</Link>
           </GridItem>
           <GridItem>
           <Image src="https://media.finishline.com/i/finishline/FNL_060822_B&W-Styles_3Up_Homepage_Tile_604x604"/>
            <Link fontSize={"l"}>Top Trending</Link>
           </GridItem>
           <GridItem>
           <Image src="https://finishline.a.bigcontent.io/v1/static/FNL_122222_HP_Tile_Recentrelease_604x604"/>
            <Link fontSize={"l"}>Recent Releases</Link>
           </GridItem>
         </Grid>
         {/* recommended for you */}
         <Text fontWeight={700}>RECOMMENDED FOR YOU</Text>
         <Text fontSize={"xs"}>12 items</Text>
         <Recommended/>
         {/* trending outfits */}
         <Text fontWeight={700}>TRENDING OUTFITS</Text>
         <Trending/>
         {/* feature collections */}
         <Text fontWeight={700} marginBottom="20px">FEATURED COLLECTIONS</Text>
         <Image src="https://finishline.a.bigcontent.io/v1/static/FNL_091322_Boots_Seasonal_Story_HP_Hero_Desktop_1213x600"/>
         
         <Grid templateColumns={['repeat(2, 1fr)','repeat(2, 1fr)','repeat(2, 1fr)']} gap={6} marginTop="20px" textAlign={"start"} textDecoration="underline"
       fontWeight={550} marginBottom="20px" >
           <GridItem>
            <Image src="https://finishline.a.bigcontent.io/v1/static/20220825-FL-Holiday-11-0467_604x604_v1"/>
            <Link fontSize={"l"}>Outerwear</Link>
           </GridItem>
           <GridItem>
           <Image src="https://finishline.a.bigcontent.io/v1/static/FNL_20220311_Multi_Vendor_Classics_PhotoStudio_604x604"/>
            <Link fontSize={"l"}>Classics</Link>
           </GridItem>
           <GridItem>
           <Image src="https://finishline.a.bigcontent.io/v1/static/FNL_121222_Birkenstock_HP_Tile_604x604"/>
            <Link fontSize={"l"}>Comfy Kicks</Link>
           </GridItem>
           <GridItem>
           <Image src="https://finishline.a.bigcontent.io/v1/static/FNL_20221221_Jordan_Everyday_Laydown_Tees_photostudio_01_604x604"/>
            <Link fontSize={"l"}>Jordan Everyday</Link>
           </GridItem>
         </Grid>
         <Image src="https://finishline.a.bigcontent.io/v1/static/FNL_052322_Goorin_Bros_CoOp_BottomSlider_Desktop_1213x600"/>
         {/* new-arrivals */}
         {/* bottom-QR */}
         <Image marginTop={"20px"} src="https://finishline.a.bigcontent.io/v1/static/FNL_052722_App_HP_Banner_Desktop_1213x295"/>
         <Image marginTop={"20px"}  src="https://media.finishline.com/i/finishline/FNL_081920_Shop_Your_Store_HP_Banner_Desktop_1213x150_1"/>
         {/* bottom-info*/}
         <Box display={"flex"} flexDirection={["column","row"]} marginTop="40px" paddingBottom={"100px"}>
           <Box width={["100%","60%"]} height={"auto"} textAlign="start">
            <Text fontSize={"xl"} marginBottom="10px"  fontWeight="700">FINISH LINE: THE INTERSECTION OF STYLE & SPORT.</Text>
             <Text fontSize={"14px"}  marginBottom="25px"  >
             Shoes, sneakers, runners, trainers, or kicks––whatever you call them, we have you covered with the latest footwear to fit your style. Check out new arrivals from premium brands like Nike, adidas, Jordan, Vans, Puma and more.
             </Text>
             <Text fontSize={"14px"} marginBottom="25px" >
             With on-trend hoodies, jackets, joggers and<Link color={"blue"} textDecoration="underline"> matching sets,</Link>  we’ve got you covered with the hottest sportswear. Whether you’re shopping for yourself or your friends, we carry the best <Link color={"blue"} textDecoration="underline"> gifts for runners,</Link>  top gifts from <Link color={"blue"} textDecoration="underline"> The North Face,</Link> <Link color={"blue"} textDecoration="underline"> Nike</Link> and<Link color={"blue"} textDecoration="underline"> adidas,</Link> as well as high-heat<Link color={"blue"} textDecoration="underline"> new arrivals</Link> from your favorite brands. We stock the freshest sports gear and shoes to keep you at the top of your game. Complete any look with a <Link color={"blue"} textDecoration="underline"> crossbody bag </Link>or <Link color={"blue"} textDecoration="underline"> New Era hat,</Link> and keep kicks fresh with premium <Link color={"blue"} textDecoration="underline"> shoe cleaning kits.</Link>
             </Text>
             <Text fontSize={"14px"}>
             Stay up-to-date on the<Link color={"blue"} textDecoration="underline"> latest sneaker drops</Link> and sneaker trends when you follow our blog and social handles. From <Link color={"blue"} textDecoration="underline"> running shoes</Link> to <Link color={"blue"} textDecoration="underline">basketball shoes,</Link> classic <Link color={"blue"} textDecoration="underline"> high-tops</Link> and <Link color={"blue"} textDecoration="underline"> retro sneakers,</Link> Finish Line is your one-stop shop. Plus, you can always buy online and pickup in-store, so you can get your favorite sneakers even faster with free, same-day pickup at your <Link color={"blue"} textDecoration="underline"> local Finish Line!</Link>
             </Text>
           </Box>
           <Box display={"flex"} justifyContent="space-around" alignItems={"center"} margin="auto" marginTop={["30px"]}>
               <Box textAlign={"start"}>
                 <Link display={"block"} fontSize={"13px"}>Jordan Retro Shoes</Link>
                 <Link display={"block"} fontSize={"13px"}>Jordan Retro 1</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike VaporMax</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max 90</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max 97</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max 270</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Force 1</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike LeBron</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike LeBron</Link>
               </Box>
               <Box textAlign={"start"} marginLeft="50px">
                 <Link display={"block"} fontSize={"13px"}>Jordan Retro Shoes</Link>
                 <Link display={"block"} fontSize={"13px"}>Jordan Retro 1</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike VaporMax</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max 90</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max 97</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Max 270</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike Air Force 1</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike LeBron</Link>
                 <Link display={"block"} fontSize={"13px"}>Nike LeBron</Link>
               </Box>
           </Box>
         </Box>
         {/* footer */}
         
    <LargeWithNewsletter/>
    </Box>

    </>
  );
}

export default App;
