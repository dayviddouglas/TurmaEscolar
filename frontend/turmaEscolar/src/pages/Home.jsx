import Header from "../components/Header";

import {Text, Box} from '@chakra-ui/react'


function Home() {
    return (
        <>

        <Header/>
         <Box mt={10}>
         <Text  fontSize='md' as='b'  > Seja Bem vindo a nossa instituição! </Text>
         </Box>
        
        
        </>

    );
}

export default Home;