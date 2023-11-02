import { Text, Box, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <div>

      <Box mt={250} w="100vw" p={30}  bgGradient= 'linear( #C0C0C0 0%, #D3D3D3 25%, #DCDCDC 50%)'  >
      <Flex justify='center'>
      
      <Text as='b'>
           L & Z Ltda &copy;&reg;
      </Text>

     

    </Flex>

      </Box>
      
        
        
    </div>
  )
}

export default Footer