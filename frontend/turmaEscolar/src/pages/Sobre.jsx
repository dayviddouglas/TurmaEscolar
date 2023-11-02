
import {Text, Box} from '@chakra-ui/react'
import Header from '../components/Header'

const Sobre = () => {
  return (
    <div>
         <Header/>

        <Box mt={10} w={500} h={50} mx="auto" >
        <Text as='b' >
            L & Z HIGH SCHOOL.
        </Text>

        <Text>
        É com grande orgulho e satisfação que nos dirigimos a vocês para apresentar a nossa Escola, uma instituição de ensino que tem servido à comunidade desde o ano de 2006. Ao longo dos anos, temos nos dedicado incansavelmente ao desenvolvimento acadêmico e pessoal dos alunos do infantil até o ensino fundamental II.
        </Text>
        </Box>
    </div>
  )
}

export default Sobre