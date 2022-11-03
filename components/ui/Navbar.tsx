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

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink style={{textDecoration: 'none'}}  href={'/'} passHref>
            <Typography variant="h6">React | Ecommerce</Typography>
        </NextLink>
        <Box flex={1} />
        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
          <NextLink style={{textDecoration: 'none'}}  href={'/category/men'} passHref>

              <Button>Hombres</Button>
 
          </NextLink>
          <NextLink style={{textDecoration: 'none'}}  href={'/category/women'} passHref>
    
              <Button>Mujeres</Button>
  
          </NextLink>
          <NextLink style={{textDecoration: 'none'}}  href={'/category/kid'} passHref>
     
              <Button>Niños</Button>
        
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
        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  )
}
