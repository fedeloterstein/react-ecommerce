import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ShopLayout } from '../../components/layouts'

const EmptyPage = () => {
  return (
    <ShopLayout
      title={'Carrito vacio'}
      pageDescription={'No hay articulos en el carrito'}
    >
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems="center"
        height={'calc(100vh - 200px)'}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display={'flex'} flexDirection="column" alignItems={'center'}>
          <Typography>Su carrito esta vacio</Typography>
          <Link href={'/'}>
            <Typography>Regresar</Typography>
          </Link>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage
