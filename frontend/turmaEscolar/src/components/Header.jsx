import Logo from "../components/layout/Logo";
import NavBar from "../components/layout/NavBar";
import { Flex, Box} from '@chakra-ui/react'

const Header = () => {
    
  return (
    <div>
      <Box w="100vw" backgroundColor='#aeb068' padding='30' >

        
<Flex >

<Logo/>
<NavBar/>

</Flex>

</Box>
    </div>
  )
}

export default Header