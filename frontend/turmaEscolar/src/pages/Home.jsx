import Footer from '../components/Footer';
import Header from '../components/Header'

import {Text, Box} from '@chakra-ui/react'


function Home() {
    return (
        <>

        <Header/>
         <Box mt={10}w={280} h={50}  mx="auto">
         <Text  fontSize='md' as='b'  > Seja Bem vindo a nossa instituição! </Text>
         </Box>
        
        <Footer/>
        </>

    );
}

export default Home;