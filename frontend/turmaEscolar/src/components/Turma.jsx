import { Box, Text } from "@chakra-ui/react";

const Turma = ({nome, categoria, status}) => {
  return (
    <div>
        <Box>
         <Text>
            {nome}
         </Text>

         <Text>
            {categoria}
         </Text>

            {status === true ? (
                <Text> Ativada </Text>
            ):(
                <Text> Desativada </Text>
            )}
        
        </Box>
    </div>
  )
}

export default Turma
