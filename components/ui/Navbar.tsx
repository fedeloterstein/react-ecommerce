import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
} from '@mui/material'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UiContext } from '../../context'

export const Navbar = () => {

  const {asPath} = useRouter()
  const {toggleSideMenu} = useContext(UiContext)

  return (
    <AppBar>
      <Toolbar>
        <NextLink style={{textDecoration: 'none'}}  href={'/'} passHref>
            <Typography variant="h6">React | Ecommerce</Typography>
        </NextLink>
        <Box flex={1} />
        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
          <NextLink style={{textDecoration: 'none'}}  href={'/category/men'} passHref>

              <Button color={asPath === '/category/men' ? 'primary' : 'info'}>Hombres</Button>
 
          </NextLink>
          <NextLink style={{textDecoration: 'none'}}  href={'/category/women'} passHref>
    
              <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
  
          </NextLink>
          <NextLink style={{textDecoration: 'none'}}  href={'/category/kid'} passHref>
     
              <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>Niños</Button>
        
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink style={{textDecoration: 'none'}}  href={'/cart'} passHref>
     
            <IconButton>
              <Badge badgeContent={2} color={'secondary'}>
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>

        </NextLink>
        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  )
}
