import Header from "../components/Header";
import {Text, Box} from '@chakra-ui/react'

const Turmas = () => {
  return (
    <div>
         <Header/>
         <Box mt={10}w={280} h={50}  mx="auto">
         <Text fontSize='2xl' as='b'>
            Turmas:
         </Text>
         </Box>
    </div>
  )
}

export default Turmas