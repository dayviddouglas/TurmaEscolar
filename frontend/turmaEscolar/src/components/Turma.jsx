import { Box,Text, Image } from "@chakra-ui/react";

const Turma = ({nome, categoria, status , foto}) => {
  return (
    <div>
        
        <Box w={250} h={40} mt={5}  >

         <Box boxSize='200'>
        <Image src={foto} alt='Imagem da Turma' />
        </Box>

        <Text>
           Turma: {nome}
         </Text>

         <Text>
            Categoria: {categoria}
         </Text>

            {status === true ? (
                <Text> Status: Ativada </Text>
            ):(
              <Text color='red'> Status: Desativada </Text>
            )}
        
        </Box>
        
    </div>
  )
}

export default Turma
