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
<Box mt={90} ml={80}>

<Breadcrumb spacing='8px' separator={<ChevronRightIcon color='#F0FFFF' />} >
  <BreadcrumbItem >
    <Link to='/'>
    <BreadcrumbLink >Home</BreadcrumbLink>
    </Link>
    
  </BreadcrumbItem>


  <BreadcrumbItem >
<Link to='/sobre'>
<BreadcrumbLink>Sobre</BreadcrumbLink>
</Link>

    
  </BreadcrumbItem>


  <BreadcrumbItem>
  <Link to='/turmas'>
    <BreadcrumbLink>Turmas</BreadcrumbLink>
    </Link>
  </BreadcrumbItem>

  
</Breadcrumb>

</Box>

    </>
  )
}

export default NavBar