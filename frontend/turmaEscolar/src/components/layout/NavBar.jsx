import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react'

  import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'



const NavBar = () => {
  return (
    <> 
<Box mt={90}>

<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} >
  <BreadcrumbItem isCurrentPage>
    <Link to='/'>
    <BreadcrumbLink >Home</BreadcrumbLink>
    </Link>
    
  </BreadcrumbItem>

  <BreadcrumbItem>
  <Link to='/turmas'>
    <BreadcrumbLink href='#'>Turmas</BreadcrumbLink>
    </Link>
  </BreadcrumbItem>

  <BreadcrumbItem >
    <BreadcrumbLink href='#'>Contato</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

</Box>

    </>
  )
}

export default NavBar