import  Logo  from "./layout/Logo";
import NavBar from "./layout/NavBar";
import { Flex, Box} from '@chakra-ui/react'

const Header = () => {
    
  return (
    <div>
      <Box w="100vw" padding='30'  bgGradient='linear( #8B4513 0%, #FFDEAD 25%, #DEB887 50%)' >

        
<Flex >

<Logo/>
<NavBar/>

</Flex>

</Box>
    </div>
  )
}

export default Header