import Header from "../components/Header";
import {Text, Box, Flex} from '@chakra-ui/react'
import Turma from "../components/Turma";
import { useState, useEffect } from "react";
import axios from 'axios';
import Footer from '../components/Footer';

const Turmas = () => {

  const [turmas,SetTurmas] = useState([])

  const getTurmas = async ()=>{
    try {
      const response = await axios.get("http://localhost:3000/turma")
       
      const dados = response.data;

      SetTurmas(dados)


    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
   getTurmas();
  },[]);


  return (
    <div>
         <Header/>
         <Box mt={10}w={280} h={50}  mx="auto">
         <Text fontSize='2xl' as='b'>
            Turmas:
         </Text>
   
      
      
         
         </Box>

     
       

       <Flex justify='space-evenly' wrap='wrap'>
          {turmas.map(
            turma => 
              <Turma key={turma.id} nome={turma.name} categoria={turma.category} status={turma.status} foto={turma.photo}></Turma>
          )
          }
          </Flex>

      
      

      
      

      
          <Footer/>

  
    </div>
  )
}

export default Turmas