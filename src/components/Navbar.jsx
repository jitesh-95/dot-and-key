// navbar here
import React from "react";
import styles from "./navbar.module.css";
import { Image, Box , Button, Flex, Text, Img,Input, useDisclosure} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react';


  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
        <Box marginLeft={"0px"} w={"25px"}> {BagIcon}</Box>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Bag</DrawerHeader>
  
            <DrawerBody>
              <h4>Congratulations! 1 D&K Full Size Freebie added to your cart for <span style={{color:"pink"}}>FREE</span></h4>
              <br/>
              <h3>Add 6 worth of products to get Full Size Freebie worth<span style={{color:"pink"}}> Rs.1089</span> for  <span style={{color:"pink"}}>FREE</span></h3>
            </DrawerBody>
  
            <DrawerFooter>
        
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

const SearchIcon = (
  <svg data-icon="search" viewBox="0 0 512 512" width="24px" height="26px">
    <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"></path>
  </svg>
);

const locationSvg =(
    <a href="https://www.dotandkey.com/apps/shipway_track"> <img style="height: 27px;" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633" class="addtc-np"/></a>
);

const BagIcon=(
    <svg viewBox="-35 0 512 512.00102" xmlns="http://www.w3.org/2000/svg"><path d="m443.054688 495.171875-38.914063-370.574219c-.816406-7.757812-7.355469-13.648437-15.15625-13.648437h-73.140625v-16.675781c0-51.980469-42.292969-94.273438-94.273438-94.273438-51.984374 0-94.277343 42.292969-94.277343 94.273438v16.675781h-73.140625c-7.800782 0-14.339844 5.890625-15.15625 13.648437l-38.9140628 370.574219c-.4492192 4.292969.9453128 8.578125 3.8320308 11.789063 2.890626 3.207031 7.007813 5.039062 11.324219 5.039062h412.65625c4.320313 0 8.4375-1.832031 11.324219-5.039062 2.894531-3.210938 4.285156-7.496094 3.835938-11.789063zm-285.285157-400.898437c0-35.175782 28.621094-63.796876 63.800781-63.796876 35.175782 0 63.796876 28.621094 63.796876 63.796876v16.675781h-127.597657zm-125.609375 387.25 35.714844-340.097657h59.417969v33.582031c0 8.414063 6.824219 15.238282 15.238281 15.238282s15.238281-6.824219 15.238281-15.238282v-33.582031h127.597657v33.582031c0 8.414063 6.824218 15.238282 15.238281 15.238282 8.414062 0 15.238281-6.824219 15.238281-15.238282v-33.582031h59.417969l35.714843 340.097657zm0 0"></path></svg>
);
// const Login=(
  
// );
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Image
        className={styles.logo}
        src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348"
      ></Image>
     <div className={styles.icons}>

     <Box w={"35px"}> {SearchIcon}</Box>    
     <Box  w={"25px"}> <a href="/"><Img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Group_346.svg?v=1655211633"></Img></a></Box>
     <Box marginLeft={"10px"} w={"25px"}> <DrawerExample/></Box>  
  
     {/* <Box w={"15px"}> {Login}</Box>      */}
     </div>
      
        
    </div>
  );
};

export default Navbar;
